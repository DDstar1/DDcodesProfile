"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: "01",
    client: "The Design Academy",
    bgColor: "bg-gradient-to-br from-black to-[#003051]",
    video: "/webdev/3d_girl.mp4",
    firstImage: "/webdev/3d_girl.mp4",
    secondImage: "/webdev/3d_girl_a3.jpg",
    thirdImage: "/webdev/3d_girl_a4.jpg",
  },
  {
    id: "02",
    client: "Creative Solutions",
    bgColor: "bg-gradient-to-br from-[#141414] to-[#FFFFFF]",
    firstImage: "/webdev/headphone_a1.png",
    video: "/webdev/headphones.mp4",
    secondImage: "/webdev/headphone_a1.png",
    thirdImage: "/webdev/headphone_a2.png",
  },
  {
    id: "03",
    client: "Visionary Designs",
    bgColor: "bg-gradient-to-br from-black to-[#2d333a]",
    firstImage: "/webdev/3d_mockup_a1.jpg",
    secondImage: "/webdev/3d_mockup_a2.jpg",
    thirdImage: "/webdev/3d_mockup_a3.jpg",
  },
  {
    id: "04",
    client: "NextGen Innovations",
    bgColor: "bg-gradient-to-br from-[#303030] to-black",
    firstImage: "/webdev/3d_juice_a2.jpg",
    video: "/webdev/3d_juice.mp4",
    secondImage: "/webdev/3d_juice_a2.jpg",
    thirdImage: "/webdev/3d_juice_a1.jpg",
  },
  {
    id: "05",
    client: "Future Tech Labs",
    bgColor: "bg-gradient-to-br from-black to-[#aca6a1]",
    firstImage: "/webdev/3d_camera_a1.jpg",
    secondImage: "/webdev/3d_camera_a2.jpg",
    thirdImage: "/webdev/3d_camera_a3.jpg",
  },
];

function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (e) =>
      console.log(scrollYProgress)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="w-[60%] md:w-[100%] z-40 mx-auto">
      <ul className="grid grid-cols-1 gap-6" ref={container}>
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          const scale = useTransform(
            scrollYProgress,
            [index / projects.length, (index + 1) / projects.length],

            [1, targetScale]
          );

          return (
            <motion.li
              style={{ scale: scale, transformOrigin: "top" }}
              key={project.id}
              className="sticky top-0 h-screen flex flex-col justify-center items-center"
            >
              <div
                className={`rounded-3xl relative p-6  shadow-lg text-white ${project.bgColor} overflow-hidden h-[80vh] md:h-[50%] w-full flex flex-col`}
                style={{
                  top: `calc(-1% + ${index * 10}px)`,
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="text-5xl font-bold">{project.id}</div>
                    <div className="min-w-0">
                      <div className="text-xl truncate">Client</div>
                      <div className="text-md truncate">{project.client}</div>
                    </div>
                  </div>
                  <button
                    className="bg-black border-2 py-2 px-8 md:px-4 text-white rounded-3xl border-white whitespace-nowrap flex-shrink-0 
  active:bg-white active:text-black active:border-black transition-all duration-300"
                  >
                    See Project
                  </button>
                </div>
                <div className="grid w-full flex-1 grid-cols-2 grid-rows-2 gap-4 mt-6">
                  <div className="relative overflow-hidden col-span-1 row-span-2 flex items-center justify-center border-white border-1 rounded-3xl text-black text-2xl font-bold">
                    {project.video ? (
                      <video
                        className="w-full h-full object-cover rounded-3xl"
                        autoPlay
                        loop
                        muted
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : project.firstImage ? (
                      <Image
                        src={project.firstImage}
                        alt="firstImage"
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      "Full Height Div"
                    )}
                  </div>
                  <div className="relative overflow-hidden flex items-center border-white border-1 justify-center bg-gray-800 text-white rounded-3xl text-2xl font-bold">
                    {project.secondImage ? (
                      <Image
                        src={project.secondImage}
                        alt="secondImage"
                        fill
                        className="object-cover object-center"
                      />
                    ) : (
                      "Top Right"
                    )}
                  </div>
                  <div className="relative overflow-hidden flex items-center border-white border-1 justify-center bg-gray-600 text-white rounded-3xl text-2xl font-bold">
                    {project.thirdImage ? (
                      <Image
                        src={project.thirdImage}
                        alt="thirdImage"
                        fill
                        className="object-cover object-center"
                      />
                    ) : (
                      "Bottom Right"
                    )}
                  </div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
