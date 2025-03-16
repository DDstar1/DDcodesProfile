import Image from "next/image";
import "./Scroll_horizontal.css"; // Import the global CSS file

const SIZE_MAP = {
  sm: "h-12 min-w-16", // Small size
  md: "h-20 min-w-24", // Medium size (default)
  lg: "h-32 min-w-40", // Large size
};

const ScrollHorizontal = ({ reverse = false, className = "", size = "md" }) => {
  // Number of unique brand logos
  const itemCount = 20;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`flex gap-4 w-max ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {/* Render the items twice to create a seamless loop */}
        {[...Array(itemCount * 2)].map((_, index) => (
          <div
            key={index}
            className={`relative ${SIZE_MAP[size]} rounded-2xl overflow-hidden border-2 border-black`}
          >
            <Image
              src={`/brand_logos/SVG-${(index % itemCount) + 1}.svg`}
              alt={`Brand Logo ${(index % itemCount) + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollHorizontal;
