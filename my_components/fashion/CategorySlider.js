import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

function CategorySlider({ data, cssPosition }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // Track navigation direction
  const intervalRef = useRef(null); // Ref to store the interval ID

  // Function to start the auto-slide interval
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setDirection("right"); // Auto-slide always moves to the right
      setCurrIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Change item every 5 seconds
  };

  // Function to reset the interval
  const resetInterval = () => {
    clearInterval(intervalRef.current); // Clear the existing interval
    startInterval(); // Restart the interval
  };

  // Initialize the interval on component mount
  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [data.length]);

  // Go to the previous slide
  const goToPrev = () => {
    setDirection("left"); // Set direction to left
    setCurrIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    resetInterval(); // Reset the interval
  };

  // Go to the next slide
  const goToNext = () => {
    setDirection("right"); // Set direction to right
    setCurrIndex((prevIndex) => (prevIndex + 1) % data.length);
    resetInterval(); // Reset the interval
  };

  return (
    <div className="relative overflow-hidden h-full w-full">
      {/* Left Button */}
      <button
        onClick={goToPrev}
        className="absolute transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
        style={{ top: "50%", left: "5px", zIndex: "10" }}
      >
        <FaChevronLeft className="h-6 w-6" /> {/* React Icon */}
      </button>

      {/* Right Button */}
      <button
        onClick={goToNext}
        className="absolute transform -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors"
        aria-label="Next slide"
        style={{ top: "50%", right: "5px", zIndex: "10" }}
      >
        <FaChevronRight className="h-6 w-6" /> {/* React Icon */}
      </button>

      {/* Slides */}
      <AnimatePresence>
        {data.map((item, index) =>
          currIndex === index ? (
            <motion.div
              key={index}
              className="absolute rounded-2xl overflow-hidden flex top-0 left-0"
              initial={{
                x: direction === "right" ? "100%" : "-100%",
                // opacity: 0,
              }} // Initial animation based on direction
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x: direction === "right" ? "-100%" : "100%",
                // opacity: 0.1,
              }} // Exit animation based on direction
              style={{
                height: "100%",
                width: "100%",
                backgroundImage: `url('${item.url}')`, // Dynamic URL from `item.url`
                backgroundSize: "cover", // Ensures the image covers the entire div
                backgroundPosition: cssPosition, // Centers the background image
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <div className="absolute p-3 inset-0 bg-black/40 flex items-end justify-start">
                <h2 className="text-white font-bold p-0 m-0 text-sm">
                  {item.name}
                </h2>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
}

export default CategorySlider;
