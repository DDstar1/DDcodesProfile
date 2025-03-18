import React from "react";
import Image from "next/image";

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
    // bgColor: "bg-gradient-to-br from-black to-white",
    bgColor: "bg-gradient-to-br from-black to-[#FFFFFF]",
    firstImage: "/webdev/headphone_a1.png",
    video: "/webdev/headphones.mp4",
    secondImage: "/webdev/headphone_a1.png",
    thirdImage: "/webdev/headphone_a2.png",
  },
  {
    id: "03",
    client: "NextGen Innovations",
    bgColor: "bg-gradient-to-br from-[#303030] to-black",
    firstImage: "/webdev/3d_juice_a2.jpg",
    video: "/webdev/3d_juice.mp4",
    secondImage: "/webdev/3d_juice_a2.jpg",
    thirdImage: "/webdev/3d_juice_a1.jpg",
  },

  {
    id: "04",
    client: "Visionary Designs",
    bgColor: "bg-gradient-to-br from-black to-[#2d333a]",
    firstImage: "/webdev/3d_mockup_a1.jpg",
    secondImage: "/webdev/3d_mockup_a2.jpg",
    thirdImage: "/webdev/3d_mockup_a3.jpg",
  },
  {
    id: "05",
    client: "Future Tech Labs",

    // bgColor: "bg-[#FFC107]",
    bgColor: "bg-gradient-to-br from-black to-[#aca6a1]",
    firstImage: "/webdev/3d_camera_a1.jpg",
    secondImage: "/webdev/3d_camera_a2.jpg",
    thirdImage: "/webdev/3d_camera_a3.jpg",
  },
];

function Projects() {
  return (
    <div className="w-[80%] z-40 mx-auto">
      <ul className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => {
          const scaleFactor = 0.8 + (index / (projects.length - 1)) * 0.2; // Ensure the last element is 1

          return (
            <li
              key={project.id}
              className="sticky"
              style={{
                top: `${10 + index * 30}px`,
                transformOrigin: "center top",
                transform: `scale(${scaleFactor})`, // Corrected formula
              }}
            >
              <div
                className={`rounded-3xl relative p-6 shadow-lg text-white ${project.bgColor} h-[85vh] overflow-hidden flex flex-col`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="text-5xl font-bold">{project.id}</div>
                    <div>
                      <div className="text-xl">Client</div>
                      <div className="text-md">{project.client}</div>
                    </div>
                  </div>
                  <button className="bg-black border-2 py-4 p-8 text-white rounded-3xl border-white">
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
                        fill
                        className="object-cover object-top"
                        src={project.firstImage}
                        alt="firstImage"
                      />
                    ) : (
                      "Full Height Div"
                    )}
                  </div>
                  <div className="flex relative overflow-hidden items-center border-white border-1 justify-center bg-gray-800 text-white rounded-3xl text-2xl font-bold">
                    {project.secondImage ? (
                      <Image
                        fill
                        className="object-cover object-center"
                        src={project.secondImage}
                        alt="secondImage"
                      />
                    ) : (
                      "Top Right"
                    )}
                  </div>
                  <div className="flex relative overflow-hidden items-center border-white border-1 justify-center bg-gray-600 text-white rounded-3xl text-2xl font-bold">
                    {project.thirdImage ? (
                      <Image
                        fill
                        className="object-cover object-center"
                        src={project.thirdImage}
                        alt="thirdImage"
                      />
                    ) : (
                      "Bottom Right"
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
