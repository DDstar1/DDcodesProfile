"use client";

import React, { useState } from "react";
import Image from "next/image";
import DetailNav from "@/my_components/anime_gallery/DetailNav";
import { motion } from "framer-motion";
import { characters } from "@/assets/anime_gallery/solo_levelling_characters";

function Page() {
  // Step 1: Create state to track active area
  const [activeSection, setActiveSection] = useState("");

  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  };

  const sections = [
    "ABOUT",
    "AFFLIATION",
    "STATUS",
    "RELATIONSHIPS",
    "SKILS",
    "WEAPONS",
  ];

  // Step 2: Function to handle section click
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <main className="w-screen h-screen relative flex flex-col ">
      <div className="absolute w-full h-full">
        <Image fill src={"/anime_gallery/sung_bg.jpg"} />
        <div className="h-full absolute z-20 left-1/2  transform -translate-x-1/2 bottom-0  w-1/2">
          <Image
            fill
            className="object-contain"
            src={"/anime_gallery/main.png"}
          />
        </div>
      </div>
      <nav className="flex relative justify-between m-5 items-center">
        <div className="font-bold text-xl text-blue-500">Solo Levelling</div>
        <div className="flex gap-5 w-5/6 items-center">
          <div>Home</div>
          <div>Characters</div>
          <div className="border-b-2 border-white flex-1" />
          <input
            className="bg-gray-800 text-white rounded-full p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Search..."
          />
        </div>
      </nav>
      <section className="flex relative justify-between flex-1 py-32 px-10">
        <div className="w-full absolute bottom-2 items-center left-0 flex gap-5">
          <div className="border-b-2 border-white flex-1" />
          <div className="w-8 h-8 rounded-full bg-white"></div>
          <div className="w-8 h-8 rounded-full bg-white"></div>
          <div className="w-8 h-8 rounded-full bg-white"></div>
        </div>
        <motion.div
          className="w-3xs flex flex-col gap-3 justify-center origin-top overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "fit-content" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-sm text-gray-400">
            {characters["SUNG JIN-WOO"].About.rank}
          </div>
          <div className="text-xl font-bold">
            {characters["SUNG JIN-WOO"].About.name}
          </div>
          <div className="text-md italic text-gray-500">
            {characters["SUNG JIN-WOO"].About.alias}
          </div>
          <div className="text-sm text-gray-300">
            {characters["SUNG JIN-WOO"].About.description}
          </div>
        </motion.div>

        <div className="flex gap-5">
          <div className="flex flex-col justify-around">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                onClick={() => handleSectionClick(section)}
                className={`cursor-pointer ${
                  activeSection === section ? "text-blue-500" : ""
                }`}
                variants={textVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {section}
              </motion.div>
            ))}
          </div>

          <DetailNav current={sections.indexOf(activeSection)} />
        </div>
      </section>
    </main>
  );
}

export default Page;
