import React from "react";
import styles from "./Infinte_Horizontal_Slider.module.css";

function Infinite_Horizontal_Slider({ children, count = 15 ,className="" }) {
  return (
    <section
    className={`bg-black z-50 w-screen border-white border-2 overflow-hidden ${className}`}
    aria-label="Infinite Horizontal Slider"
  >
      <div className={styles.sliderWrapper}>
        {[...Array(count)].map((_, index) => (
          <div
            key={index}
            className={styles.sliderItem}
            style={{ "--index": index }}
            aria-hidden={index !== 0} // Hide all but the first item from screen readers
          >
            {children}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Infinite_Horizontal_Slider;