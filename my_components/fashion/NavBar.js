"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  // Reusable links array
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Detect scroll direction
 useEffect(() => {
  let ticking = false; // Flag to prevent multiple calls in the same frame

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setIsScrollingDown(true);
        } else {
          // Scrolling up
          setIsScrollingDown(false);
        }

        lastScrollY.current = currentScrollY;
        ticking = false; // Reset the flag
      });

      ticking = true; // Set the flag to true while waiting for the next frame
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <nav
      ref={navRef}
      role="navigation"
      className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white px-6 py-4 flex items-center justify-between gap-5 backdrop-blur-md z-60 transition-transform duration-300 ease-in-out transform origin-top"
      style={{
        transform: isScrollingDown ? "scaleY(0)" : "scaleY(1)",
      }}
    >
      {/* Brand Name */}
      <div className="text-2xl font-bold">
        <Link href="/" className="hover:text-gray-300 transition-colors">
          FashionHub
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-gray-300 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle (Hamburger Icon) */}
      <button
        className="md:hidden focus:outline-none"
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

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black bg-opacity-80 backdrop-blur-md flex flex-col items-center py-4 space-y-4 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } md:hidden`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;