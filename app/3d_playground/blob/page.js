"use client";
import { useState } from "react";
import * as THREE from "three";
import { IoSettings } from "react-icons/io5";
import Blob from "@/my_components/3d_playground/Blob";

export default function Home() {
  return (
    <main className="relative max-w-[100vw] h-screen overflow-hidden">
      <Blob />
    </main>
  );
}
