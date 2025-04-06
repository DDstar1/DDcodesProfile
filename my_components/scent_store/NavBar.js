import React from "react";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5"; // Import the search icon
import Link from "next/link";

const logo = "/scent_store/logo.png";

function NavBar() {
  return (
    <nav className="fixed bg-[#231b3c] top-0 left-0 w-full z-50 overflow-hidden h-14 flex items-center p-4 justify-between shadow-md">
      <Link
        href="/scent_store"
        className="flex flex-wrap items-center hover:border-b-2 p-2 gap-5 "
      >
        <Image alt="logo" src={logo} width={30} height={30} />
      </Link>
      <div className="flex items-center gap-5 hover:border-b-2 p-2">
        <Link
          href="/scent_store/gallery"
          className="flex flex-wrap items-center gap-5 "
        >
          Gallery
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
