import React from "react";

const projects = [
  {
    id: "01",
    client: "The Design Academy",
    bgColor: "bg-blue-500",
  },
  {
    id: "02",
    client: "Creative Solutions",
    bgColor: "bg-red-500",
  },
  {
    id: "03",
    client: "NextGen Innovations",
    bgColor: "bg-green-500",
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
                <div className="col-span-1 row-span-2 flex items-center justify-center bg-white rounded-3xl text-black text-2xl font-bold">
                  Full Height Div
                </div>
                <div className="flex items-center justify-center bg-gray-800 text-white rounded-3xl text-2xl font-bold">
                  Top Right
                </div>
                <div className="flex items-center justify-center bg-gray-600 text-white rounded-3xl text-2xl font-bold">
                  Bottom Right
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
