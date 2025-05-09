import React from "react";

function Marker() {
  return (
    <svg
      className="relative"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 480"
    >
      <path
        fill="#808"
        d="M480 210A160 160 0 0 0 210 93.8V0A160 160 0 0 0 93.8 270H0a160 160 0 0 0 270 116.2V480a160 160 0 0 0 116.2-270H480Zm-210 60h-60v-60h60v60Z"
      />
    </svg>
  );
}

export default Marker;
