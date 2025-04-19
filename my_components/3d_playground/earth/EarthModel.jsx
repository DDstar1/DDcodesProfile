"use client";

import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nebula from "./utils/Nebula";
import Starfield from "./utils/Starfield";
// import * as THREE from "three";

function IcoSphere() {
  const icoRef = useRef();

  // const map = useLoader(
  //   THREE.TextureLoader,
  //   "earth/textures/earth-daymap-4k.jpg"
  // );

  useFrame(() => {
    icoRef.current.rotation.y += 0.01;
  });
  return (
    <group>
      <mesh ref={icoRef}>
        <icosahedronGeometry args={[1.5, 10]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  );
}

export default function Earth() {
  return (
    <Canvas
      gl={{
        toneMapping: THREE.NoToneMapping,
        powerPreference: "default",
        antialias: true,
      }}
      style={{ height: "100vh" }}
    >
      <IcoSphere />
      <Nebula />
      <Starfield />
      <hemisphereLight args={[0xffffffff, 0x00000000]} />
      <OrbitControls />
    </Canvas>
  );
}
