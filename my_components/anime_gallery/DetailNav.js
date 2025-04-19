"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Marker({ active }) {
  return (
    <motion.svg
      className="relative"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 480"
      animate={
        active ? { rotate: 1800, fill: "#fff" } : { rotate: 0, fill: "#808" }
      }
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <path d="M480 210A160 160 0 0 0 210 93.8V0A160 160 0 0 0 93.8 270H0a160 160 0 0 0 270 116.2V480a160 160 0 0 0 116.2-270H480Zm-210 60h-60v-60h60v60Z" />
    </motion.svg>
  );
}

function DetailNav({ current = 0 }) {
  const markerRefs = useRef([]);
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (!markerRefs.current[current] || !containerRef.current) return;

    const containerBottom = containerRef.current.getBoundingClientRect().bottom;
    const markerTop = markerRefs.current[current].getBoundingClientRect().top;
    const markerHeight = markerRefs.current[current].offsetHeight;

    const height = containerBottom - markerTop - markerHeight / 2;

    setLineHeight(height);
  }, [current]);

  return (
    <div
      className="flex relative flex-col justify-around h-full"
      ref={containerRef}
    >
      {/* Dynamic vertical line using framer-motion */}
      <motion.div
        className="absolute w-0 border-l-2 border-white left-1/2 transform -translate-x-1/2 origin-bottom bottom-0"
        style={{ height: lineHeight }}
        animate={{ height: lineHeight }} // Animate height change
        transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
      />

      {/* Markers */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          className="w-5 h-5"
          key={i}
          ref={(el) => (markerRefs.current[i] = el)}
        >
          <Marker active={i === current} />
        </div>
      ))}
    </div>
  );
}

export default DetailNav;
