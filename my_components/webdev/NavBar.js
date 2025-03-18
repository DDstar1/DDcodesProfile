import React from "react";

function NavBar() {
  return (
    <nav className="w-screen text-2xl py-3 bg-white rounded-b-[50px] flex absolute z-30 top-0 capitalize justify-evenly">
      <span>about</span>
      <span>customers</span>
      <span>products</span>
      <span>contact</span>
    </nav>
  );
}

export default NavBar;
