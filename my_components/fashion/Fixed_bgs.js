"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function FixedBgs() {
  const [showFirstBg, setShowFirstBg] = useState(true);
  let ticking = false; // Prevents multiple redundant updates

  // useEffect(() => {
  //   const checkPosition = () => {
  //     const element = document.getElementById("first_bg");
  //     if (element) {
  //       const rect = element.getBoundingClientRect();
  //       setShowFirstBg(rect.bottom > 0); // Hide when bottom is above viewport
  //     }
  //     ticking = false; // Reset the flag
  //   };

  //   const onScroll = () => {
  //     if (!ticking) {
  //       ticking = true;
  //       requestAnimationFrame(checkPosition);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   checkPosition(); // Run on mount

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <>
      {/* Fixed Backgrounds with Smooth Transition */}
      {showFirstBg ? (
        <div className={`fixed top-0 left-0 inset-0 -z-10 `}>
          <Image
            src="/fashion/bg.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ) : (
        <div className="fixed top-0 left-0 inset-0 -z-10">
          <Image
            src="/fashion/bg2.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      )}
    </>
  );
}

export default FixedBgs;
