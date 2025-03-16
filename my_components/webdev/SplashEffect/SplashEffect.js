import React from "react";

const SplashEffect = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full -translate-y-1/2 h-[100px]"
      style={{
        background:
          "repeating-conic-gradient(#93c5fd 0 3%, transparent 0 11%), " +
          "repeating-conic-gradient(transparent 0 5%, #93c5fd 0 7%) 50% / 60% 60%, " +
          "repeating-conic-gradient(transparent 0 7%, #93c5fd 0 9%) 50% / 70% 70%, " +
          "repeating-conic-gradient(transparent 0 11%, #93c5fd 0 13%) 50% / 80% 80%, " +
          "radial-gradient(#93c5fd 22%, transparent 0), transparent",
        backgroundRepeat: "no-repeat",
        backgroundColor: "transparent",
        filter: "blur(10px)",
      }}
    ></div>
  );
};

export default SplashEffect;
