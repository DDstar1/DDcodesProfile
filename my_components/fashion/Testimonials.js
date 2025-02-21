import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sasha Shapere",
    role: "Fashion Enthusiast",
    image: "/fashion/headshot.jpg",
    text: "The quality and design of Amy’s Shoes are unmatched. I love how I can express my style while supporting eco-friendly fashion. Definitely my go-to store for all occasions.",
  },
  {
    name: "Jordan Styles",
    role: "Designer",
    image: "/fashion/headshot.jpg",
    text: "Amy’s Shoes are a perfect blend of comfort and style. The craftsmanship is incredible, and I always get compliments when I wear them.",
  },
  {
    name: "Olivia Trends",
    role: "Influencer",
    image: "/fashion/headshot.jpg",
    text: "Sustainable fashion is the future, and Amy’s Shoes lead the way! Their designs are stunning and truly eco-friendly.",
  },
  {
    name: "Leo Harper",
    role: "Stylist",
    image: "/fashion/headshot.jpg",
    text: "Amy’s Shoes are my favorite pick for my clients. They combine fashion with function in the best way possible!",
  },
  {
    name: "Mia Couture",
    role: "Fashion Blogger",
    image: "/fashion/blogger.jpg",
    text: "These shoes are a must-have! The comfort and durability make them stand out in the industry.",
  },
  {
    name: "Ethan Vogue",
    role: "Model",
    image: "/fashion/headshot.jpg",
    text: "I always feel confident in Amy’s Shoes. They elevate any outfit and are super comfortable to walk in!",
  },
];

export default function Testimonials() {
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const total = 5;

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth(); // Initial call
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handlePrev = () => {
    setTestimonialsList((prev) => {
      const lastItem = prev[prev.length - 1];
      return [lastItem, ...prev.slice(0, -1)];
    });
  };

  const handleNext = () => {
    setTestimonialsList((prev) => {
      const [firstItem, ...rest] = prev;
      return [...rest, firstItem];
    });
  };

  return (
    <div
      style={{ height: "300px" }}
      className="flex gap-5 min-h-42 relative justify-center p-8 text-gray-400 flex-nowrap"
    >
      <AnimatePresence>
        {testimonialsList.slice(0, total).map((testimonial, index) => {
          const middleIndex = Math.floor(total / 2);
          const distanceFromMiddle = Math.abs(index - middleIndex);
          const blurAmount = distanceFromMiddle * 1.5;
          const scale = 1 - distanceFromMiddle * 0.1;
          const translateX =
            (index - middleIndex) * (screenWidth > 900 ? 100 : 50);

          return (
            <motion.div
              className="min-w-64 border-white border-2 bg-gray-900 absolute h-full top-0 rounded-2xl p-4 flex flex-col justify-between"
              style={{
                transform: `translateX(${translateX}%) scale(${scale})`,
                zIndex: total - distanceFromMiddle,
                opacity: scale,
                filter: `blur(${blurAmount}px)`, // Apply blur
              }}
              key={testimonial.name}
              initial={{
                opacity: 0,
                scale: 0.8,
                x: translateX,
                filter: "blur(3px)",
              }}
              animate={{
                opacity: scale,
                scale,
                x: translateX,
                filter: `blur(${blurAmount}px)`,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: translateX,
                filter: "blur(3px)",
              }}
              transition={{
                scale: { duration: 0.3, ease: "easeInOut" },
                x: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
                filter: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <div className="h-[90%] overflow-clip">
                <div className="flex relative items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full border-white border-2 w-12 h-12"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 max-w-md text-lg leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrev}
                  className="text-gray-400 hover:text-white"
                >
                  &larr;
                </button>
                <button
                  onClick={handleNext}
                  className="text-gray-400 hover:text-white"
                >
                  &rarr;
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
