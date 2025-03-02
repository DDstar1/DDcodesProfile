import React from "react";
import NavBar from "@/my_components/webdev/NavBar";
import ScrollHorizontal from "@/my_components/webdev/Scroll_horizontal";
import ScrollTestimonialHorizontal from "@/my_components/webdev/ScrollTestimonialHorizontal";
import Floating_3D from "@/my_components/webdev/Floating_3D";
import Image from "next/image";
import Projects from "@/my_components/webdev/Projects";

function Page() {
  return (
    <main>
      <NavBar />
      <section className="relative h-screen bg-brown">
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70%] aspect-square">
          <Image
            src="/webdev/cartoon_head.png"
            alt="Centered Image"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-[150px] p-0 m-2 text-center">hi, i'm alex</h1>
        <div className="flex gap-2 justify-around">
          <div className="bg-black flex-1 z-30 text-lg">
            A 3D Designer passionate about crafting bold and memorable visuals.
            I bring ideas to life with precision, creativity, and attention to
            detail—turning concepts into stunning 3D experiences. 🚀
          </div>
          <div className=" flex-1"></div>
          <div className="bg-black flex flex-1 justify-center items-center z-30">
            <button className="rounded-full w-1/2  py-2 text-white font-bold bg-gradient-to-r from-black via-purple-500 to-red-500">
              Click Me
            </button>
          </div>
        </div>
      </section>
      <section className="w-screen bg-black">
        <ScrollHorizontal className="mb-[10px]" />
        <ScrollHorizontal size="lg" reverse={true} className="mb-[1px]" />
        <ScrollHorizontal size="lg" />
      </section>
      <section className="h-screen text-center flex flex-col items-center justify-evenly  w-screen bg-red-100 relative">
        {" "}
        <h1 className="text-[150px] !p-0 !m-0 text-center">About me</h1>
        <div>
          <p className="max-w-[50%] leading-10 text-xl mx-auto">
            With over five years of experince in design, I specialize in
            branding, web design and user experince. I love collaborating with
            businesses that want to stand out and showcase their best side.
          </p>
          <p className="leading-10 text-xl">
            let create something amazing together
          </p>
        </div>
        <button className="rounded-full w-1/2  py-2 text-white font-bold bg-gradient-to-r from-black via-purple-500 to-red-500">
          Click Me
        </button>
        <Floating_3D />
      </section>
      <section className="bg-green-400 p-6">
        <h1 className=" font-bold">Services</h1>
        <ol className="list-none space-y-12 max-w-[80%] mx-auto">
          {[
            {
              name: "3D Modelling",
              description:
                "We create detailed 3D models for various applications, including games, films, and product visualization. Our models are crafted with precision to meet industry standards. Whether organic or mechanical, we bring ideas to life in 3D.",
            },
            {
              name: "3D Animation",
              description:
                "Our animations add movement and realism to static models, making them more engaging. We specialize in character animation, motion graphics, and product animations. Let us bring your vision to life with stunning animations.",
            },
            {
              name: "3D Rendering",
              description:
                "We produce high-quality renders that showcase products and designs in the best light. Our rendering techniques ensure photorealistic visuals with perfect lighting and textures. Ideal for marketing, architecture, and presentations.",
            },
            {
              name: "Product Design",
              description:
                "From concept to creation, we design products that blend functionality and aesthetics. Our design process involves research, prototyping, and user-focused innovation. We help brands create standout products for their market.",
            },
            // {
            //   name: "Branding",
            //   description:
            //     "We craft unique brand identities that leave lasting impressions. Our branding services include logo design, visual identity, and strategic messaging. Build a brand that resonates with your audience and stands out in the market.",
            // },
          ].map((service, index) => (
            <li key={index} className="flex items-center space-x-6">
              <span className="text-7xl font-extrabold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="text-3xl font-bold capitalize">
                  {service.name}
                </div>
                <p className="text-lg font-normal text-gray-100 mt-2">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-blue-300 px-20">
        <h1 className="font-bold">Projects</h1>
        <Projects />
      </section>
      <section className="bg-black">
        <h1 className="text-white">What Clients are Saying</h1>
        <ScrollTestimonialHorizontal size="lg" />
        <ScrollTestimonialHorizontal size="lg" reverse />
        <ScrollTestimonialHorizontal size="lg" />
        {/* <ScrollTestimonialHorizontal /> */}
      </section>
    </main>
  );
}

export default Page;
