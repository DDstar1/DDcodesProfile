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
    image: "/fashion/designer.jpg",
    text: "Amy’s Shoes are a perfect blend of comfort and style. The craftsmanship is incredible, and I always get compliments when I wear them.",
  },
  {
    name: "Olivia Trends",
    role: "Influencer",
    image: "/fashion/influencer.jpg",
    text: "Sustainable fashion is the future, and Amy’s Shoes lead the way! Their designs are stunning and truly eco-friendly.",
  },
  {
    name: "Leo Harper",
    role: "Stylist",
    image: "/fashion/stylist.jpg",
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
    image: "/fashion/model.jpg",
    text: "I always feel confident in Amy’s Shoes. They elevate any outfit and are super comfortable to walk in!",
  },
];

export default function Testimonials() {
  return (
    <div
      style={{ height: "300px" }}
      className="flex gap-5 min-h-42 relative justify-center p-8 text-gray-400 flex-nowrap"
    >
      {testimonials.slice(0, 5).map((testimonial, index) => {
        const total = 5; // Total number of testimonials being displayed
        const middleIndex = Math.floor(total / 2); // Middle index (e.g., 2 for 5 items)
        const distanceFromMiddle = Math.abs(index - middleIndex); // Distance from the middle index

        // Calculate scale and translateX dynamically
        const scale = 1 - distanceFromMiddle * 0.1; // Scale decreases by 0.1 for each step away from the middle
        const translateX = (index - middleIndex) * 20; // Move left or right by 40% for each step away from the middle

        return (
          <div
            className="min-w-64 border-white border-2 bg-gray-900 absolute h-full top-0 rounded-2xl p-4 flex flex-col justify-between"
            style={{
              transform: `translateX(${translateX}%) scale(${scale})`, // Dynamic transform
              zIndex: total - distanceFromMiddle, // Higher z-index for elements closer to the middle
              opacity: scale, // Opacity decreases as scale decreases
            }}
            key={index}
          >
            <div>
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
              <button className="text-gray-400 hover:text-white">&larr;</button>
              <button className="text-gray-400 hover:text-white">&rarr;</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
