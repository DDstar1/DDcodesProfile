import React, { useRef, useState } from "react";
import styles from "./CurvedText.module.css"; // Import the CSS Module

const CurvedText = ({ my_letter = "Curved Letters ", spacing = 60 }) => {
  const divRef = useRef(null);

  const [totalWidth, setTotalWidth] = useState(300);

  // Radius of the circle
  const radius = totalWidth / (2 * Math.PI) + spacing;

  return (
    <div
      ref={divRef}
      className={`flex flex-row-reverse justify-center items-center relative ${styles.rotating}`} // Apply the rotating class
      style={{
        width: `${totalWidth}px`,
        height: `${totalWidth}px`,
        transform: "rotate(180deg)",
      }}
    >
      {/* SVG Circle as Background Path */}
      <svg
        width="120%" // Take full width of the container
        height="120%" // Take full height of the container
        style={{ position: "absolute", top: "-10%", left: "-10%" }}
      >
        <circle
          cx="50%" // Center the circle horizontally
          cy="50%" // Center the circle vertically
          r={radius} // Adjust radius to align with text
          stroke="rgb(0 0 0 / 0.5)" // Outer ring color
          strokeWidth="50" // Thickness of the donut ring
          fill="transparent" // Transparent fill to create the hole
        />
      </svg>
      {/* Curved Text */}
      {my_letter.split("").map((letter, index) => {
        // Calculate the angle for each character (evenly distributed)
        const angle = (360 / my_letter.length) * index;
        const radians = (angle * Math.PI) / 180; // Convert to radians

        // Calculate the position of the character
        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);

        return (
          <span
            key={index}
            style={{
              position: "absolute",
              left: `50%`,
              top: `50%`,
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${
                angle + 90
              }deg)`,
              transformOrigin: "center center",
            }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default CurvedText;
