"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";

function Model() {
  const gltf = useGLTF("/3d_playground/Moon_1_3474.glb"); // Path is relative to /public

  return (
    <primitive
      object={gltf.scene}
      scale={0.001} // Drastically reduced scale
      position={[0, 0, 0]} // Centered
    />
  );
}

export default function ModelView() {
  return (
    <Canvas
      style={{ height: "100vh" }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

      {/* Grid Helper - larger size with subdivisions */}
      <gridHelper
        args={[10, 10, 0x444444, 0x888888]}
        position={[0, -0.01, 0]} // Slightly below objects to avoid z-fighting
        rotation={[0, 0, 0]}
      />

      {/* Axes Helper for orientation */}
      <axesHelper args={[3]} />

      {/* Model with suspense fallback */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
}
