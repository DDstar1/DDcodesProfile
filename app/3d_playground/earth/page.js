"use client";
import Earth from "@/my_components/3d_playground/earth/EarthModel";

export default function Home() {
  return (
    <main className="relative max-w-[100vw] h-screen overflow-hidden">
      <Earth />
    </main>
  );
}
