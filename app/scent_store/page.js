"use client";

import React, { useEffect, useState } from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/my_components/scent_store/Testimonial/Testimonials";
import Word_finder_v2 from "@/my_components/scent_store/Word_Finder/Word_finder_v2";
import localFont from "next/font/local";

const girl_pic_3 = "/scent_store/girl_sellar3.jpg"; // Use the third image as background
const myDancingFont = localFont({ src: "./../fonts/DancingScript-Bold.ttf" });

function Page() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isTestimonialsFixed, setIsTestimonialsFixed] = useState(false);
  const [mb, setMB] = useState(0);

  useEffect(() => {
    const whyChooseSection = document.getElementById("why-choose-us");
    const testimonialsSection = document.getElementById("testimonials");
    const testimonialsSection_MB =
      testimonialsSection.getBoundingClientRect().height;

    setMB(testimonialsSection_MB);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsBlurred(scrollY > 80); // Adjust threshold as needed

      if (whyChooseSection) {
        const rect = whyChooseSection.getBoundingClientRect();
        setIsTestimonialsFixed(rect.bottom <= window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="pt-8">
      <section
        className={`w-full fixed px-7 md:!pr-2 flex h-[calc(100vh)] pb-20 transition-all duration-300 ${
          isBlurred ? "filter blur-sm" : ""
        }`}
        style={{
          backgroundImage: `url(${girl_pic_3})`,
          backgroundSize: "cover",
          backgroundPosition: "65%",
        }}
      >
        <div className="w-3/5 flex flex-col justify-evenly gap-10 relative z-10 text-white">
          <h1
            className={`text-7xl md:text-5xl font-extrabold drop-shadow-lg tracking-wide relative ${myDancingFont.className}`}
          >
            <Word_finder_v2 text={" Your Destination for Exquisite Perfumes"} />
          </h1>
          <p className="text-xl drop-shadow-md">
            Elevate your scent experience with our carefully curated fragrances.
          </p>
          <Link href="/gallery">
            <button className="flex justify-center max-w-[500px]  items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg transition duration-300 hover:bg-green-700 w-fit">
              <span className="font-semibold whitespace-nowrap">
                Explore Our Perfume Range
              </span>
              <IoStorefrontOutline
                size={25}
                className="cursor-pointer hover:text-blue-300 transition duration-200"
              />
            </button>
          </Link>
        </div>
      </section>

      <section
        id="why-choose-us"
        className="flex rounded-t-[40px] rounded-b-[40px] relative z-10 p-5 mt-[100vh] mb-11 flex-col justify-center items-center py-10 bg-white"
        style={{ marginBottom: `${mb}px` }}
      >
        <h2 className="shadow-bottom pb-2 text-4xl font-bold mb-6 text-gray-800 text-center">
          Why Choose Us for Your Fragrance
        </h2>
        <p className="mb-8 text-lg text-center text-gray-600 max-w-2xl">
          At our store, we believe that a fragrance is more than just a
          scent—it`&apos;`s a reflection of who you are. Our mission is to
          provide you with an unforgettable shopping experience, featuring a
          diverse selection of high-quality perfumes. Whether you’re searching
          for your signature scent or a thoughtful gift, we are here to assist
          you at every step.
        </p>
        <ul className="list-disc list-inside text-center flex flex-wrap justify-evenly gap-10 text-lg text-gray-600">
          <li className="mb-2 max-w-xs">
            <span className="font-semibold">Vast Selection:</span> From iconic
            brands to niche fragrances, we have it all.
          </li>
          <li className="mb-2 max-w-xs">
            <span className="font-semibold">Personalized Guidance:</span> Our
            experts help you find the perfect scent.
          </li>
          <li className="mb-2 max-w-xs">
            <span className="font-semibold">Great Value:</span> Enjoy
            competitive pricing and special offers.
          </li>
          <li className="mb-2 max-w-xs">
            <span className="font-semibold">Satisfaction Guaranteed:</span> Easy
            returns if you`&apos;`re not completely satisfied.
          </li>
        </ul>
      </section>

      <section
        id="testimonials"
        className={`flex fixed rounded-t-[40px] w-full flex-col justify-center bottom-0 items-center bg-gray-200 py-10 text-center transition-all duration-300 ${
          isTestimonialsFixed ? "left-0" : "-left-[100vw]"
        }`}
      >
        <Testimonials />
      </section>
    </main>
  );
}

export default Page;
