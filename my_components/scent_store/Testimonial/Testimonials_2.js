import React from "react";
import Image from "next/image"; // Make sure to import Image
import testimonials from "@/utils/testimonials";

const testimonial_length = testimonials.length;

function Testimonials_2() {
  return (
    <>
      <h2 className="text-4xl font-bold mb-6 text-gray-800">
        What Our Clients Say
      </h2>
      <div
        className="flex relative items-center h-40 overflow-x-scroll"
        style={{
          width: `${(testimonial_length - 1) * 175}px`,
          maxWidth: "100%",
        }}
      >
        {testimonials.map((item, index) => (
          <Image
            key={index}
            alt={`Testimonial from ${item.name}`}
            width={200}
            height={200}
            src={item.image}
            // style={{
            //   transform: `translateX(-${index * 25}px)`,
            // }}
            style={{
              top: `0px`,
              transform: `translateX(${index * 100}px)`,
            }}
            className="absolute rounded-full h-36 w-36  object-cover object-top border-4 border-white shadow-md transition-transform duration-500 hover:scale-110"
          />
        ))}
      </div>
    </>
  );
}

export default Testimonials_2;
