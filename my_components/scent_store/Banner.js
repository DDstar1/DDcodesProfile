"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import images from "@/assets/scent_store/images";
import placeholder_base64 from "@/assets/scent_store/imageBase64";

const Banner = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDescBox, setShowDescBox] = useState(false); // State for transition effect

  useEffect(() => {
    const fishElement = document.getElementById("fish");
    console.log(fishElement);
  }, []);

  const replaceDecBox = (index) => {
    if (selectedImage == null) {
      setSelectedImage(images[index]); // Trigger showing the box with animation
      setTimeout(() => {
        setShowDescBox(true);
      }, 300); // Adjust this duration based on the CSS transition time}
    } else {
      setShowDescBox(false);

      setTimeout(() => {
        setSelectedImage(images[index]); // Trigger showing the box with animation
        setTimeout(() => {
          setShowDescBox(true);
        }, 10); //
        //
      }, 500); //
    }
  };

  const closeDescBox = () => {
    setShowDescBox(false); // Trigger hide animation
    setTimeout(() => {
      setSelectedImage(null); // After animation finishes, set image to null
    }, 300); // Adjust this duration based on the CSS transition time
  };

  return (
    <div className="flex flex-col gap-7 ">
      <div id="fish" className={styles.banner}>
        <div
          className={`${styles.slider} `}
          style={{
            "--quantity": images.length,
            animationPlayState: selectedImage ? "paused" : "running",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              num={index}
              className={`${
                styles.item
              } transition-all duration-300 border-2 rounded-xl ${
                selectedImage?.url == image.url ? styles.boxborder2 : ""
              } ${
                selectedImage && selectedImage.url !== image.url
                  ? styles.blurred
                  : ""
              }`}
              style={{ "--position": index + 1 }}
              onClick={() => replaceDecBox(index)}
            >
              <Image
                src={image.url}
                width={200}
                height={250}
                placeholder={placeholder_base64}
                alt={`Dragon ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          id="desc_box"
          className={`relative p-4 self-center flex z-50 max-w-96 gap-5 bg-white/30 backdrop-blur-md rounded-lg shadow-2xl border border-white/40 
            transition-all duration-500 ease-in-out ${
              showDescBox ? "max-h-80 opacity-100" : "max-h-0 m-0 p-0 opacity-0"
            } ${styles.boxborder}`}
        >
          <Image
            src={selectedImage.url}
            width={100}
            height={300}
            alt={`Dragon`}
            className="object-contain rounded-lg"
          />
          <div className="max-h-52 overflow-y-scroll scroll-m-0">
            <h2 className="text-xl font-bold text-black mb-2 sticky text-center bg-white/95 backdrop-blur-xl rounded-sm  top-0">
              {selectedImage.title}
            </h2>
            <p className="text-black">{selectedImage.description}</p>
          </div>

          {/* X Button */}
          <button
            onClick={closeDescBox}
            className="absolute top-2 right-2 text-white bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;
