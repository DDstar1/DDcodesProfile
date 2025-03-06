"use client";
import { useState } from "react";
import * as THREE from "three";
import { IoSettings } from "react-icons/io5";
import MoonScene from "@/my_components/3d_playground/Moon";

export default function Home() {
  // Color Groups Configuration
  const colorGroups = {
    primaryAndSecondary: {
      colors: [
        { name: "red", color: new THREE.Vector3(1, 0, 0) },
        { name: "green", color: new THREE.Vector3(0, 1, 0) },
        { name: "blue", color: new THREE.Vector3(0, 0, 1) },
        { name: "yellow", color: new THREE.Vector3(1, 1, 0) },
        { name: "cyan", color: new THREE.Vector3(0, 1, 1) },
        { name: "magenta", color: new THREE.Vector3(1, 0, 1) },
      ],
    },
    pastelTones: {
      colors: [
        { name: "pastelPink", color: new THREE.Vector3(1, 0.71, 0.76) },
        { name: "pastelBlue", color: new THREE.Vector3(0.68, 0.85, 0.9) },
        { name: "pastelGreen", color: new THREE.Vector3(0.61, 0.87, 0.69) },
        { name: "pastelPurple", color: new THREE.Vector3(0.8, 0.6, 0.79) },
      ],
    },
    earthTones: {
      colors: [
        { name: "brown", color: new THREE.Vector3(0.65, 0.16, 0.16) },
        { name: "olive", color: new THREE.Vector3(0.5, 0.5, 0) },
        { name: "forest", color: new THREE.Vector3(0.13, 0.55, 0.13) },
      ],
    },
    coolTones: {
      colors: [
        { name: "navy", color: new THREE.Vector3(0, 0, 0.5) },
        { name: "teal", color: new THREE.Vector3(0, 0.5, 0.5) },
        { name: "lavender", color: new THREE.Vector3(0.9, 0.9, 0.98) },
      ],
    },
  };

  const scatterAxisOptions = ["x", "y", "z", "xy", "xz", "yz", "xyz"];

  const [headColor, setHeadColor] = useState(
    colorGroups.primaryAndSecondary.colors[0].color
  );
  const [selectedColorGroup, setSelectedColorGroup] = useState(
    colorGroups.pastelTones.colors
  );
  const [sphereMaxSeparation, setSphereMaxSeparation] = useState(2);
  const [sphereNumSections, setSphereNumSections] = useState(50);
  const [sphereScatterAxis, setSphereScatterAxis] = useState("xy");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const allColorGroups = Object.keys(colorGroups);
  // const currentColorGroup = colorGroups[selectedColorGroup];

  const generateGradient = (colors) => {
    return `linear-gradient(to right, ${colors
      .map(
        (c) => `rgb(${c.color.x * 255}, ${c.color.y * 255}, ${c.color.z * 255})`
      )
      .join(", ")})`;
  };

  return (
    <main className="relative max-w-[100vw] h-screen overflow-hidden">
      <MoonScene
        sphereScatterAxis={sphereScatterAxis}
        sphereMaxSeparation={sphereMaxSeparation}
        selectedColorGroup={selectedColorGroup}
        headColor={headColor}
        sphereNumSections={sphereNumSections}
      />
      {isSettingsOpen && (
        <div className="absolute text-black left-0 bottom-0 bg-white rounded-lg p-6 md:w-96 w-[80%] max-h-[60vh] overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Scene Configuration</h2>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Color Group</label>
            <div className="grid grid-cols-2 gap-2">
              {allColorGroups.map((groupName) => (
                <button
                  key={groupName}
                  className={`h-10 rounded-lg ${
                    selectedColorGroup === groupName
                      ? "ring-4 ring-blue-500"
                      : ""
                  }`}
                  style={{
                    background: generateGradient(colorGroups[groupName].colors),
                  }}
                  onClick={() => {
                    setSelectedColorGroup(colorGroups[groupName].colors);
                    setHeadColor(colorGroups[groupName].colors[0].color);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Head Color</label>
            <div className="grid grid-cols-6 gap-2">
              {selectedColorGroup.map((colorObj) => (
                <button
                  key={colorObj.name}
                  className={`w-10 h-10 rounded-full ${
                    headColor === colorObj.color ? "ring-4 ring-blue-500" : ""
                  }`}
                  style={{
                    backgroundColor: `rgb(${colorObj.color.x * 255},${
                      colorObj.color.y * 255
                    },${colorObj.color.z * 255})`,
                  }}
                  onClick={() => setHeadColor(colorObj.color)}
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Sphere Max Separation: {sphereMaxSeparation}
            </label>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={sphereMaxSeparation}
              onChange={(e) => setSphereMaxSeparation(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Sphere Sections: {sphereNumSections}
            </label>
            <input
              type="range"
              min="10"
              max="100"
              step="1"
              value={sphereNumSections}
              onChange={(e) => setSphereNumSections(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Scatter Axis</label>
            <select
              value={sphereScatterAxis}
              onChange={(e) => setSphereScatterAxis(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {scatterAxisOptions.map((axis) => (
                <option key={axis} value={axis}>
                  {axis}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Close Settings
          </button>
        </div>
      )}
      <button
        onClick={() => setIsSettingsOpen((prev) => !prev)}
        className="fixed bottom-4 left-4 bg-white/50 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white/70 transition-all z-50"
      >
        <IoSettings className="text-2xl text-gray-700" />
      </button>
    </main>
  );
}
