import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "We love working with them; they are so nice and good.",
    img: "/webdev/headshot.jpg",
    company: "Google",
  },
  {
    id: 2,
    text: "Their service is outstanding! Highly recommended.",
    img: "/webdev/headshot.jpg",
    company: "Microsoft",
  },
  {
    id: 3,
    text: "One of the best experiences we've ever had.",
    img: "/webdev/headshot.jpg",
    company: "Amazon",
  },
  {
    id: 4,
    text: "Amazing team, great results, and fantastic support.",
    img: "/webdev/headshot.jpg",
    company: "Netflix",
  },
];

const ScrollTestimonialHorizontal = ({ reverse = false, className = "" }) => {
  return (
    <div
      className={`flex gap-4 my-4 ${
        reverse ? "flex-row-reverse" : "flex-row"
      } animate-marquee`}
    >
      {testimonials.map(({ id, text, img, company }) => (
        <div
          key={id}
          className="flex items-center bg-black border-2 p-5 rounded-3xl border-white max-w-[80%] mx-auto gap-4 min-w-[300px]"
        >
          {/* Profile Image */}
          <div className="relative w-16 h-16 overflow-hidden rounded-full">
            <Image
              src={img}
              alt="Profile Picture"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Testimonial Text */}
          <div className="flex-1">
            <p className="text-sm text-white leading-relaxed">{text}</p>
            <p className="text-xs text-gray-300 mt-2">— {company}</p>{" "}
            {/* Company Name */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollTestimonialHorizontal;
