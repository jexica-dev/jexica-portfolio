import * as THREE from 'three'
import { render } from 'react-dom'
import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

extend({ EffectComposer, RenderPass, UnrealBloomPass })


function Sphere({ geometry, x, y, z, s }) {
  const ref = useRef()
  useFrame((state) => {
    let time = state.clock.getElapsedTime();
    ref.current.position.x = x + 50 * Math.sin( time * s/10)
    ref.current.position.y = y + Math.sin(time * s / 1)
    ref.current.position.z = z + Math.sin(time * s / .5)
  })
  return (
    <mesh ref={ref} position={[x, y, z]} scale={[s, s, s]} geometry={geometry}>
      <meshStandardMaterial color="#c8fa5c" roughness={1} />
    </mesh>
  )
}

function RandomSpheres() {
  const [geometry] = useState(() => new THREE.SphereGeometry(1, 100, 100), [])
  const data = useMemo(() => {
    return new Array(15).fill().map((_, i) => ({
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      z: Math.random() * 100 - 50,
      s: Math.random() * 50 + 5,
    }))
  }, [])
  return data.map((props, i) => <Sphere key={i} {...props} geometry={geometry} />)
}

function Bloom({ children }) {
  const { gl, camera, size } = useThree()
  const [scene, setScene] = useState()
  const composer = useRef()
  useEffect(() => void scene && composer.current.setSize(size.width, size.height), [size])
  useFrame(() => scene && composer.current.render(), 1)
  return (
    <>
      <scene ref={setScene}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <unrealBloomPass attachArray="passes" args={[undefined, 1.5, 1, 0]} />
      </effectComposer>
    </>
  )
}

function Main({ children }) {
  const scene = useRef()
  const { gl, camera } = useThree()
  useFrame(() => {
    gl.autoClear = false
    gl.clearDepth()
    gl.render(scene.current, camera)
  }, 2)
  return <scene ref={scene}>{children}</scene>
}

export default function ThreejsModel() {
  return (
    <Canvas style={{ height: "100vh", zindex: "-100", position: "absolute"}} linear camera={{ position: [0, 0, 120] }}>
      <Main>
        <pointLight />
        <ambientLight />
        <RandomSpheres />
      </Main>
      <Bloom>
        <ambientLight />
        <RandomSpheres />
      </Bloom>
    </Canvas>
  );
}

