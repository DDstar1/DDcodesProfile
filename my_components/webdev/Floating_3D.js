"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

function Floating_3D({
  img_src = "/webdev/floating3d4.png",
  from_left = false,
  top_animate_pos = ["0%", "10%"],
}) {
  const first_floating_element = useRef(null);
  const image_size = 240;

  const { scrollYProgress } = useScroll({
    target: first_floating_element,
    offset: ["end end", "end center"],
  });

  const horizontal_displacement = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${image_size}px`, `-${image_size / 3}px`]
  );
  const top = useTransform(scrollYProgress, [1, 0], top_animate_pos);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", () =>
      console.log(scrollYProgress.current)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div
      ref={first_floating_element}
      style={{
        [from_left ? "left" : "right"]: horizontal_displacement,
        top,
        width: `${image_size}px`,
        height: `${image_size}px`,
      }}
      className="absolute"
    >
      <Image
        src={img_src}
        alt="Floating Image"
        fill
        className="object-contain"
      />
    </motion.div>
  );
}

export default Floating_3D;
