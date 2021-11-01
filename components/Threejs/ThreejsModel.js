import { MeshDistortMaterial, Stars, OrbitControls } from "@react-three/drei";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";


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
  const [geometry] = useState(
    () => new THREE.SphereGeometry(0.75, 200, 200),
    []
  );
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
  // const colorMap = useLoader(useTexture, '/gradient-2.png');

  // const [colorMap, colorMap2] = useTexture([
  //   '/gradient-2.png',
  //   '/gradient-34.png'
  //   // 'PavingStones092_1K_Normal.jpg',
  //   // 'PavingStones092_1K_Roughness.jpg',
  //   // 'PavingStones092_1K_AmbientOcclusion.jpg',
  // ])

  // const props = {
  //   // map: useTexture('/gradient-2.png'),
  //   metalness: .7,
  //   roughness: 0,
  //   factor: 0.7,
  //   speed: 1.7,
  //   distort: 0.8,
  //   opacity: 1,
  //   color: '#e5bdf6'

  // };


  return (
    <SafeHydrate>
      <Canvas
        style={{ height: "100vh", zindex: "-100", position: "fixed" }}
        linear
        camera={{ position: [0, 0, 120] }}
      >
        
        <Main>
        
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 15]} intensity={0.75} />
          <color attach="background" args={["black"]} />

          {/* <RandomSpheres material={new THREE.MeshNormalMaterial()} /> */}
          {/* <RandomSpheres count={15} /> */}

          <ambientLight />

          {/* <mesh scale={30} position={[-80, -30, 0]}>
            <sphereBufferGeometry args={[1, 50, 50]} attach="geometry" />
            <MeshDistortMaterial {...props}  material={new THREE.MeshNormalMaterial()} />
          </mesh> */}

          <ambientLight />
          <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={100} // Depth of area where stars should fit (default=50)
            count={700} // Amount of stars (default=5000)
            factor={4} // Size factor (default=4)
            saturation={0} // Saturation 0-1 (default=0)
            fade="true" // Faded dots (default=false)
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
