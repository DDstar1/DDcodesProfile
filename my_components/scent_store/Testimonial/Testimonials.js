import React, { useState } from "react";
import Image from "next/image";
import testimonials from "@/assets/scent_store/testimonials";

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const tl = testimonials.length;

  return (
    <>
      <h2 className="text-4xl font-bold mb-6 pb-2 px-1 text-gray-800 shadow-bottom">
        What Our Clients Say
      </h2>
      <div
        className="relative h-[400px] overflow-x-auto z-10"
        style={{
          width: `${
            2 * (280 - 90) + (tl - 2) * (280 - 2 * 90) + (tl - 1) * 90
          }px`,
          maxWidth: "100%",
        }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`w-64 absolute top-0 left-0 p-4  overflow-hidden flex flex-col items-center transition-all duration-500 ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "blur-[2px]"
                : "blur-none z-50 hover:scale-105"
            }`}
            style={{
              top: index % 2 === 0 ? "0px" : "5px",
              left: `${index * 200}px`,
            }}
            onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
            onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
          >
            <Image
              alt={`Testimonial from ${item.name}`}
              width={200}
              height={200}
              src={item.image}
              className="rounded-full h-36 w-36 object-cover object-top border-2 border-[#231b3c] shadow-md transition-transform duration-500 "
            />
            <div className="bg-gray-100 relative border-[#231b3c] border-2 rounded-2xl p-2 h-48 overflow-y-scroll">
              <div className="flex my-2 gap-2 items-center justify-center">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-xs text-center">
                  {item.faculty}, Level {item.level}
                </p>
              </div>
              <p className="relative text-center text-gray-700">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
