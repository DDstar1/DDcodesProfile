"use client";

import React from "react";
import styles from "./styles.module.css"; // Import the CSS module
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { GiPolarStar } from "react-icons/gi";

import shoesList from "@/assets/fashion/shoes";
import hoodieList from "@/assets/fashion/hoodie";
import facemasksList from "@/assets/fashion/facemask";

import CategorySlider from "@/my_components/fashion/CategorySlider";
import Infinite_Horizontal_Slider from "@/my_components/fashion/Infinte_Horizontal_Slider/Infinte_Horizontal_Slider"; // Corrected import
import Nav from "@/my_components/fashion/NavBar";
import CurvedText from "@/my_components/fashion/CurvedText/CurvedText";
import Testimonials from "@/my_components/fashion/Testimonials";

function FixedBgs({ firstRefIsVisible, lastRefIsVisible }) {
  return (
    <div className="fixed top-0 left-0 inset-0 -z-10">
      {/* Background Image 1 */}
      <Image
        src="/fashion/bg.jpg"
        alt="Background 1"
        layout="fill"
        objectFit="cover"
        priority
        className={`absolute transition-opacity duration-500 ${
          firstRefIsVisible && !lastRefIsVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Background Image 2 */}
      <Image
        src="/fashion/bg2.jpg"
        alt="Background 2"
        layout="fill"
        objectFit="cover"
        priority
        className={`absolute transition-opacity duration-500 ${
          lastRefIsVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function Page() {
  // Detect when the first section is in view
  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.1, // Adjust if needed
  });

  // Detect when the last section is in view
  const { ref: lastRef, inView: lastInView } = useInView({
    threshold: 0.1, // Adjust if needed
  });

  return (
    <>
      <FixedBgs firstRefIsVisible={firstInView} lastRefIsVisible={lastInView} />
      <section className={`relative w-screen h-screen`}>
        <Nav />
        <h1 className="hidden text-4xl font-bold fixed inset-0 md:flex justify-center items-center">
          <CurvedText my_letter={"Addicted To Fashion "} spacing={100} />
        </h1>
        <div
          ref={firstRef}
          className="absolute left-0 md:flex-col bottom-0 w-full flex items-center justify-around p-6 bg-black bg-opacity-80 text-white"
        >
          <h1 className="md:hidden max-w-lg text-7xl font-bold text-center">
            Addicted to fashion
          </h1>

          <div className="flex flex-col max-w-md">
            <p>
              Fashion is not just about clothing; it's a form of self-expression
              and a way to showcase your personality. Stay updated with the
              latest trends and make a statement with your unique style.
            </p>
            <button className="mt-4 px-4 py-2 text-blue-400 border-2 backdrop-blur-md border-blue-500/50 rounded-full">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* Infinite Horizontal Slider */}
      <Infinite_Horizontal_Slider count={20}>
        <span className="text-green-900 text-3xl font-semibold min-w-fit flex items-center gap-5">
          <span>Up to 50% off sale</span>
          <GiPolarStar size={50} className="inline" />
        </span>
      </Infinite_Horizontal_Slider>

      <section className={`bg-black w-screen overflow-hidden`}>
        <h1>Discover</h1>
        <section className="flex justify-evenly gap-5 p-6 flex-wrap">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`relative flex-1 h-96 rounded-lg overflow-hidden md:min-w-[45%]  shadow-lg`}
            >
              <div
                className={`${styles.discoverImage}`}
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundImage: `url('/fashion/demo.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              ></div>
              <div className="absolute p-3 inset-0 bg-black/40 flex items-end justify-start">
                <h2 className="text-white font-bold p-0 m-0 text-lg">
                  Fashion Demo
                </h2>
              </div>
            </div>
          ))}
        </section>
      </section>

      <section className="flex relative gap-6 h-[80vh] md:h-[60vh] bg-gray-900 md:bg-black">
        {/*  bg-gradient-to-r from-gray-500 to-gray-900 p-6 */}
        <div className="flex-1 flex-grow relative w-full min-h-1 md:hidden">
          <Image
            src="/fashion/male_model.jpg"
            alt="Fashion"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl object-top"
          />
        </div>
        <div className="flex-1 flex flex-col justify-evenly ">
          <Image
            src="/fashion/male_model.jpg"
            alt="Fashion"
            layout="fill"
            objectFit="cover"
            className={`rounded-2xl object-top hidden md:flex ${styles.maskImage}`}
          />
          <div className="md:absolute p-3 inset-0  md:bg-black/40 flex-1 flex flex-col justify-evenly md:justify-end">
            <h1 className="text-7xl md:text-5xl md:self-start md:w-[80%] md:text-left font-bold text-center text-gradient">
              Discover the future of fashion
            </h1>
            <p className="text-lg text-gray-400 md:self-end md:w-[80%] md:text-white md:text-md text-justify mt-4 relative">
              We blend innovation with style, curating trends that redefine
              elegance. Step into a world where fashion meets the
              future—effortlessly bold, uniquely you.
            </p>
            <button className="mt-4 px-4 py-2 w-full text-blue-400 border-2 backdrop-blur-md border-blue-500/50  rounded-full">
              Explore More
            </button>
          </div>
        </div>
      </section>

      <section className="flex h-[90vh] gap-5 bg-black md:flex-col">
        {/* Single large image with overlay */}
        <div className="relative flex-1 overflow-hidden rounded-2xl">
          <Image
            src="/fashion/female_model.jpg"
            alt="Female Fashion Model"
            layout="fill"
            objectFit="cover"
            className={`rounded-2xl object-top ${styles.maskImage}`}
          />
          {/* Overlay for the single image */}
          <div className="absolute p-3 inset-0 bg-black/50 flex flex-col items-end justify-end">
            <h1 className="text-6xl font-bold text-right text-gradient">
              Discover trendy styles
            </h1>
            <p className="text-md self-start w-[80%] text-gray-300 text-justify mt-2">
              Elevate your wardrobe with the latest fashion trends. From bold
              streetwear to timeless classics, we bring you styles that make a
              statement. Stay ahead, stay stylish.
            </p>
          </div>
        </div>
        {/* Grid for the four images */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-5">
          <CategorySlider data={shoesList} cssPosition="center bottom" />
          <CategorySlider data={hoodieList} cssPosition="center top" />
          <CategorySlider data={facemasksList} cssPosition="center top" />
          <CategorySlider data={hoodieList} cssPosition="center top" />
        </div>
      </section>

      <section className="w-full flex h-42 flex-col items-center bg-black shadow-lg m-0">
        <Testimonials />
      </section>

      <section
        ref={lastRef}
        className="flex flex-col items-center relative  justify-center min-h-screen p-6"
      >
        <Infinite_Horizontal_Slider
          className={"absolute top-0 left-0"}
          count={20}
        >
          <span className="text-green-900 text-3xl font-semibold min-w-fit flex items-center gap-5">
            <span>SUSCRIBE</span> <GiPolarStar size={50} className="inline" />
          </span>
        </Infinite_Horizontal_Slider>
        <div className="max-w-2xl w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-white text-xl font-bold mb-4">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="text-white block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-gray-700 text-white border border-gray-500 rounded-md focus:outline-none focus:border-green-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="subscribe"
                className="w-4 h-4 text-green-400 bg-gray-800 border-gray-600 rounded"
              />
              <label htmlFor="subscribe" className="text-gray-400 text-sm">
                I’ll subscribe to the XYZ newsletter
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-green-400 border border-green-400 rounded-md hover:bg-green-400 hover:text-black transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Page;
