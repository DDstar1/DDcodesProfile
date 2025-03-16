import Image from "next/image";
import "./ScrollTestimonialHorizontal.css";

const testimonials = [
  {
    id: 1,
    text: "We love working with them! Their team is incredibly professional, and the quality of work they deliver is always outstanding. Highly recommended for anyone looking for top-notch service.",
    img: "/webdev/headshot.jpg",
    company: "Google",
  },
  {
    id: 2,
    text: "Their service is outstanding! From start to finish, the entire process was seamless, and the end result exceeded our expectations. We couldn't be happier with our decision to work with them.",
    img: "/webdev/headshot.jpg",
    company: "Microsoft",
  },
  {
    id: 3,
    text: "One of the best experiences we've ever had. Their attention to detail and dedication to quality made a huge difference. We are thrilled with the final outcome and look forward to future projects.",
    img: "/webdev/headshot.jpg",
    company: "Amazon",
  },
  {
    id: 4,
    text: "Amazing team, great results, and fantastic support. Their innovative approach and commitment to excellence made a significant impact on our business. We would definitely recommend them to others.",
    img: "/webdev/headshot.jpg",
    company: "Netflix",
  },
  {
    id: 5,
    text: "An exceptional experience from start to finish! The team was knowledgeable, responsive, and always willing to go the extra mile. The final product was nothing short of impressive.",
    img: "/webdev/headshot.jpg",
    company: "Apple",
  },
  {
    id: 6,
    text: "A truly talented and dedicated team. They took the time to understand our needs and delivered a solution that was beyond our expectations. We will definitely be working with them again.",
    img: "/webdev/headshot.jpg",
    company: "Meta",
  },
  {
    id: 7,
    text: "Outstanding creativity and execution! The project was completed on time, and the results spoke for themselves. Their expertise and passion for their work are evident in everything they do.",
    img: "/webdev/headshot.jpg",
    company: "Adobe",
  },
  {
    id: 8,
    text: "They transformed our ideas into reality with precision and efficiency. We were impressed with their level of professionalism and commitment to delivering excellence.",
    img: "/webdev/headshot.jpg",
    company: "Spotify",
  },
  {
    id: 9,
    text: "A game-changer for our business! Their innovative solutions and dedication to quality have had a tremendous impact. We appreciate their hard work and creativity.",
    img: "/webdev/headshot.jpg",
    company: "Tesla",
  },
  {
    id: 10,
    text: "Incredible service and support! They truly care about their clients and go above and beyond to ensure satisfaction. We couldn't have asked for a better partner.",
    img: "/webdev/headshot.jpg",
    company: "Samsung",
  },
];

const ScrollTestimonialHorizontal = ({ reverse = false, className = "" }) => {
  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div
        className={`flex gap-4 w-max ${
          reverse ? "animate-scrollReverse" : "animate-scroll"
        }`}
      >
        {/* Duplicate items for seamless looping */}
        {[...testimonials, ...testimonials].map(
          ({ id, text, img, company }, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-4  mb-3 p-6 bg-white bg-opacity-10 rounded-3xl shadow-lg border border-gray-500 hover:bg-opacity-20 transition-all"
            >
              {/* Profile Image */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={img}
                  alt="Profile Picture"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Testimonial Text */}
              <div className="text-left w-64">
                <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
                <p className="font-bold text-gray-400 mt-2">— {company}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ScrollTestimonialHorizontal;
