"use client";

import { Link } from "react-scroll";
import React, { useState, useEffect, useRef } from "react";

const link_data = [
  { text: "About", to: "about", duration: 500 },
  { text: "Expertise", to: "expertise", duration: 500 },
  { text: "Projects", to: "projects", duration: 500 },
  { text: "Customers", to: "testimonials", duration: 500 },
  { text: "Contact", to: "contact", duration: 500 },
];

//  {navLinks.map((link) => (
//           <Link
//             key={link.label}
//             href={link.href}
//             className="hover:text-gray-300 transition-colors"
//             onClick={() => setIsOpen(false)}
//           >
//             {link.label}
//           </Link>
//         ))}

function NavBar() {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
    </>
  );
}

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function NavButton() {
    return (
      <button
        className="h-full w-6 absolute text-black left-1/2 z-50 bg-black -translate-x-1/2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="space-y-1.5">
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>
    );
  }
  return (
    <>
      <div className="hidden absolute -right-1 top-0 z-40 bg-black  h-12 w-14 rounded-l-full md:block">
        {" "}
        <NavButton />
      </div>
      <div
        className={`hidden absolute right-0 top-0 z-30 bg-white h-[40vh] w-[50vw] rounded-l-[24px] md:block transition-all duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className="absolute  w-full top-0 flex flex-col  justify-evenly items-center bg-red-400/0 h-full rounded-l-full">
          {" "}
          {link_data.map((data, index) => (
            <Link
              key={index}
              to={data.to}
              smooth={true}
              duration={data.duration}
              className="cursor-pointer hover:text-purple-600 transition-colors"
            >
              {data.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const DesktopNavBar = () => {
  return (
    <div className="w-screen md:hidden text-2xl py-3 bg-white rounded-b-[50px] text-black flex absolute top-0 z-40 capitalize justify-evenly">
      {link_data.map((data, index) => (
        <Link
          key={index}
          to={data.to}
          smooth={true}
          duration={data.duration}
          className="cursor-pointer hover:text-purple-600 transition-colors"
        >
          {data.text}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
