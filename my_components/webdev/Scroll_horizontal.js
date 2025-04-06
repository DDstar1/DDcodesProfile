import Image from "next/image";

const SIZE_MAP = {
  sm: "h-12 min-w-16", // Small size
  md: "h-20 min-w-24", // Medium size (default)
  lg: "h-32 min-w-40", // Large size
};

const ScrollHorizontal = ({ reverse = false, className = "", size = "md" }) => {
  return (
    <div
      className={`flex gap-1 ${
        reverse ? "flex-row-reverse" : "flex-row"
      } ${className}`}
    >
      {[...Array(20)].map((_, index) => (
        <div
          key={index + 1}
          className={`relative ${SIZE_MAP[size]} rounded-2xl overflow-hidden border-2 border-black`}
        >
          <Image
            src={`/brand_logos/SVG-${index + 1}.svg`}
            alt={`Brand Logo ${index + 1}`}
            layout="fill"
            priority
            className="absoluteobject-cover transition-opacity duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollHorizontal;
