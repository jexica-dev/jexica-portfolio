import {
  MeshDistortMaterial, Stars
} from "@react-three/drei";
import { Canvas, extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// import ShaderBall from './ShaderTexture/ShaderBall.js'


function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}



extend({ EffectComposer, RenderPass, UnrealBloomPass });

function Sphere({ geometry, x, y, z, s, material }) {
  const ref = useRef();
  const glassMaterialProps = {
    thickness: 5,
    roughness: 1,
    clearcoat: 1,
    clearcoatRoughness: 0,
    transmission: 1,
    ior: 1.25,
    envMapIntensity: 25,
    color: "#ffffff",
    attenuationTint: "#ffe79e",
    attenuationDistance: 0,
  };

  useFrame((state) => {
    let time = state.clock.getElapsedTime();
    ref.current.position.x = x + 50 * Math.sin((time * s) / 55);
    ref.current.position.y = y + 20 * Math.sin((time * s) / 25);
    ref.current.position.z = z + 30 * Math.sin((time * s) / 55);
  });
  return (
    <mesh
      ref={ref}
      position={[x, y, z]}
      scale={[s, s, s]}
      geometry={geometry}
      material={material ? material : null}
    >
      {!material ? <meshPhysicalMaterial {...glassMaterialProps} /> : null}
      {/* color="#c8fa5c"  */}
    </mesh>
  );
}

function RandomSpheres({ material, count }) {
  const [geometry] = useState(() => new THREE.SphereGeometry(.75, 200, 200), []);
  const data = useMemo(() => {
    return new Array(count || 15).fill().map((_, i) => ({
      x: Math.random() * 300 - 150,
      y: Math.random() * 250 - 100,
      z: Math.random() * 100 - 100,
      s: Math.random() * 100 - 50,
    }));
  }, []);
  return data.map((props, i) => (
    <Sphere key={i} {...props} geometry={geometry} material={material} />
  ));
}

function Bloom({ children }) {
  const { gl, camera, size } = useThree();
  const [scene, setScene] = useState();
  const composer = useRef();
  useEffect(
    () => void scene && composer.current.setSize(size.width, size.height),
    [size]
  );
  useFrame(() => scene && composer.current.render(), 1);
  return (
    <>
      <scene ref={setScene}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <unrealBloomPass attachArray="passes" args={[undefined, 1.5, 1, 0]} />
      </effectComposer>
    </>
  );
}

function Main({ children }) {
  const scene = useRef();
  const { gl, camera } = useThree();
  

  useFrame(() => {
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(scene.current, camera);
  }, 2);
  return <scene ref={scene}>{children}</scene>;
}

export default function ThreejsModel() {

  // const colorMap = useLoader(TextureLoader, '/gradient_13.png')

  return (
    <SafeHydrate>
    <Canvas
      style={{ height: "100vh", zindex: "-100", position: "fixed" }}
      linear
      camera={{ position: [0, 0, 120] }}
    >
      <Main>
        <ambientLight intensity={.5} />
        <directionalLight position={[10, 10, 15]} intensity={.75}/>
        <color attach="background" args={["black"]} />
        

        {/* <RandomSpheres material={new THREE.MeshNormalMaterial()} /> */}
        {/* <RandomSpheres count={15} /> */}

        
        {/* <mesh scale={30} position={[0, -20, 0]} >
          <sphereBufferGeometry args={[1, 50, 50]} attach="geometry"  />
          <MeshDistortMaterial  factor={.5} distort={1} speed={1.5} opacity={.9}  transparent metalness={.5} roughness={0} shadowSide={1}  />
        </mesh> */}

{/* 

        <ShaderBall
        // position={[0, -100, 100]}
        timeOffset={1813}
        // rotation={[-Math.PI / 2, 0, 0]}
        scale={[10, 10, 10]}
        movement={0.3}
        factor={0.1}
      >

        <RandomSpheres count={15} /> 
      </ShaderBall> */}


        <ambientLight />
        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={100} // Depth of area where stars should fit (default=50)
          count={700} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade="true"// Faded dots (default=false)
        />
      </Main>
      <Bloom>
        <ambientLight />
        {/* <RandomSpheres count={25} material={new THREE.MeshBasicMaterial()} /> */}
      </Bloom>
      </Canvas>
      </SafeHydrate>
  );
}
