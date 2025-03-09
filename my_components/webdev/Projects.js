import React from "react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    client: "The Design Academy",
    bgColor: "bg-blue-500",
    video: "/webdev/3d_girl.mp4",
    firstImage: "/webdev/3d_girl.mp4",
    secondImage: "/webdev/3d_girl_a3.jpg",
    thirdImage: "/webdev/3d_girl_a4.jpg",
  },
  {
    id: "02",
    client: "Creative Solutions",
    bgColor: "bg-red-500",
    firstImage: "/webdev/headphone_a1.png",
    video: "/webdev/headphones.mp4",
    secondImage: "/webdev/headphone_a1.png",
    thirdImage: "/webdev/headphone_a2.png",
  },
  {
    id: "03",
    client: "NextGen Innovations",
    bgColor: "bg-green-500",
    firstImage: "/webdev/3d_juice_a2.jpg",
    video: "/webdev/3d_juice.mp4",
    secondImage: "/webdev/3d_juice_a2.jpg",
    thirdImage: "/webdev/3d_juice_a1.jpg",
  },
  {
    id: "04",
    client: "Future Tech Labs",
    bgColor: "bg-yellow-500",
  },
  {
    id: "05",
    client: "Visionary Designs",
    bgColor: "bg-purple-500",
  },
];

function Projects() {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-6 relative">
      <ul className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <li
            key={project.id}
            className="sticky top-0 z-[calc(10-)]"
            style={{ paddingTop: `${index * 1.5}rem` }}
          >
            <div
              className={`rounded-3xl p-6 shadow-lg text-white ${project.bgColor} min-h-[87vh] flex flex-col`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="text-5xl font-bold">{project.id}</div>
                  <div>
                    <div className="text-xl">Client</div>
                    <div className="text-md">{project.client}</div>
                  </div>
                </div>
                <button className="bg-black border-2 px-5 text-white rounded-3xl border-white">
                  See Project
                </button>
              </div>
              <div className="grid w-full flex-1 grid-cols-2 grid-rows-2 gap-4 mt-6">
                <div className="relative overflow-hidden col-span-1 row-span-2 flex items-center justify-center bg-white rounded-3xl text-black text-2xl font-bold">
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
                      alt={`firstImage`}
                    />
                  ) : (
                    "Full Height Div"
                  )}
                </div>
                <div className="flex relative overflow-hidden items-center justify-center bg-gray-800 text-white rounded-3xl text-2xl font-bold">
                  {project.secondImage ? (
                    <Image
                      fill
                      className="object-cover object-center"
                      src={project.secondImage}
                      alt={`secondImage`}
                    />
                  ) : (
                    "Top Right"
                  )}
                </div>
                <div className="flex relative overflow-hidden items-center justify-center bg-gray-600 text-white rounded-3xl text-2xl font-bold">
                  {project.thirdImage ? (
                    <Image
                      fill
                      className="object-cover object-center"
                      src={project.thirdImage}
                      alt={`thirdImage`}
                    />
                  ) : (
                    "Bottom Right"
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
