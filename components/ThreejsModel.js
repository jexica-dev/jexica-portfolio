import * as THREE from "three";
import { render } from "react-dom";
import React, { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

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
    ref.current.position.x = x + 50 * Math.sin((time * s) / 20);
    ref.current.position.y = y + 20 * Math.sin((time * s) / 5);
    ref.current.position.z = z + 30 * Math.sin((time * s) / 20);
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
  const [geometry] = useState(() => new THREE.SphereGeometry(1, 100, 100), []);
  const data = useMemo(() => {
    return new Array(count || 15).fill().map((_, i) => ({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 50,
      z: Math.random() * 150 - 75,
      s: Math.random() * 20 + 5,
    }));
  }, []);
  return data.map((props, i) => (
    <Sphere key={i} {...props} geometry={geometry} material={material}  />
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
  return (
    <Canvas
      style={{ height: "100vh", zindex: "-100", position: "absolute" }}
      linear
      camera={{ position: [0, 0, 120] }}
    >
      <Main>
        <pointLight />
        <ambientLight />
        <RandomSpheres material={new THREE.MeshNormalMaterial()} />
        <RandomSpheres count={35}/>
      </Main>
      <Bloom>
        <ambientLight />
        <RandomSpheres count={10} material={new THREE.MeshBasicMaterial()} />
      </Bloom>
    </Canvas>
  );
}
