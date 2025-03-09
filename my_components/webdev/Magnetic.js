"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MagneticImage = ({ src, alt, className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (clientX - centerX) * 0.1;
    const offsetY = (clientY - centerY) * 0.1;

    setPosition({ x: offsetX, y: offsetY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      // onMouseLeave ={setPosition({ x: 0, y: 0 })}
      className="absolute w-full h-screen flex items-center justify-center"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className={`z-20 h-[70%] aspect-square ${className}`}
      >
        <Image
          priority
          loading="eager"
          src={src}
          alt={alt}
          width={500} // Set a defined width
          height={500} // Set a defined height
          className="object-contain w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default MagneticImage;
