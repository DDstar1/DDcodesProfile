import React from "react";
import Image from "next/image";

function Floating_3D() {
  return (
    <>
      <div className="absolute z-20 top-10 left-10 w-52 h-52">
        <Image
          src="/webdev/floating3d4.png"
          alt="Centered Image"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute z-20 top-10 right-5 w-52 h-52">
        <Image
          src="/webdev/floating3d1.png"
          alt="Centered Image"
          fill
          className="object-contain"
        />
      </div>{" "}
      <div className="absolute z-20 top-[50%] left-5 w-52 h-52">
        <Image
          src="/webdev/floating3d2.png"
          alt="Centered Image"
          fill
          className="object-contain"
        />
      </div>{" "}
      <div className="absolute z-20 top-[50%] right-5 w-52 h-52">
        <Image
          src="/webdev/floating3d3.png"
          alt="Centered Image"
          fill
          className="object-contain"
        />
      </div>
    </>
  );
}

export default Floating_3D;
