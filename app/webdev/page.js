import React from "react";
import NavBar from "@/my_components/webdev/NavBar";
import ScrollHorizontal from "@/my_components/webdev/ScrollHorizontal/Scroll_horizontal";
import ScrollTestimonialHorizontal from "@/my_components/webdev/ScrollTestimonialHorizontal/ScrollTestimonialHorizontal";
import Floating_3D from "@/my_components/webdev/Floating_3D";
import Image from "next/image";
import Projects from "@/my_components/webdev/Projects";
import Form from "@/my_components/webdev/Form";
import SplashShapeDivider from "@/my_components/webdev/SplashShapeDivider";
import MagneticImage from "@/my_components/webdev/Magnetic";

function Page() {
  return (
    <main className="bg-black relative w-screen overflow-clip m-0 p-0">
      <NavBar />
      <section className="relative h-screen w-screen  py-12 overflow-hidden bg-gradient-to-t from-black via-purple-900 to-red-600">
        <MagneticImage src="/webdev/cartoon_head.png" alt="Magnetic Image" />

        <h1 className="text-[150px] p-0 m-2 text-center">hi, i'm alex</h1>
        <div className="flex gap-2 mt-10 justify-around">
          <div className="text-white flex-1 z-30 text-2xl font-semibold px-5">
            A 3D Designer passionate about crafting bold and memorable visuals.
            I bring ideas to life with precision, creativity, and attention to
            detail—turning concepts into stunning 3D experiences. 🚀
          </div>
          <div className=" flex-1"></div>
          <div className=" flex flex-1 justify-center items-center z-30">
            <button className="rounded-full mt-6 px-8 py-4 text-white font-bold text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg hover:scale-105 transition-all">
              Explore My Work
            </button>
          </div>
        </div>
      </section>
      <section className="w-screen bg-black">
        <ScrollHorizontal size="md" className="mb-[10px]" />
        <ScrollHorizontal size="lg" reverse={true} className="mb-[10px]" />
        {/* <ScrollHorizontal size="lg" /> */}
      </section>
      <section className="bg-gradient-to-b from-purple-500 to-black">
        <div className=" text-center flex flex-col items-center justify-evenly w-screen gap-10 h-[70vh]  relative">
          <SplashShapeDivider color1="black" />
          <h2 className="text-9xl font-bold text-white top-1">About Me</h2>
          <div className="leading-10 text-white font-semibold text-xl">
            <p className="max-w-[50%] mx-auto">
              With over five years of experience in design, I specialize in
              branding, web design, and user experience. My passion lies in
              crafting visually stunning and highly functional designs that not
              only captivate audiences but also drive meaningful engagement.
              Whether it's creating a brand identity from scratch, refining an
              existing design, or developing intuitive user interfaces, I thrive
              on transforming ideas into reality.
            </p>

            <p className="max-w-[50%] mx-auto mt-4">
              Let’s create something amazing together—something that not only
              looks great but also leaves a lasting impression. Ready to bring
              your vision to life? Let’s make it happen.
            </p>
          </div>

          <Floating_3D />
        </div>

        <div className="py-16 text-white">
          <h2 className="text-6xl text-left relative font-bold px-20">
            My Expertise
          </h2>
          <div className="grid grid-cols-2 gap-12 px-20 mt-12">
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
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl shadow-lg border border-white border-opacity-20 bg-gray-800 bg-opacity-10 backdrop-blur-lg transition-all hover:scale-105 hover:bg-opacity-20 relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/30 to-red-500/10 opacity-20"></div>
                <h3 className="text-3xl font-semibold relative z-10">
                  {service.name}
                </h3>
                <p className="mt-3 text-gray-300 relative z-10">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-t from-black to-purple-900 px-20">
        <SplashShapeDivider color1="black" />

        <h1 className="text-6xl text-right font-bold">Projects</h1>
        <Projects />
      </section>
      <section className="bg-black">
        <h1 className="text-6xl font-bold text-white">
          What Clients are Saying
        </h1>
        <ScrollTestimonialHorizontal size="md" />
        {/* <ScrollTestimonialHorizontal /> */}
      </section>
      <section className="flex relative flex-row text-black overflow-hidden gap-6 px-12 bg-gray-300 w-screen  items-center">
        <SplashShapeDivider color1="black" />
        {/* Contact Info */}
        <div className="flex flex-1 flex-col justify-center items-center text-center p-4">
          <p className="text-7xl font-semibold px-4 py-2 rounded-lg">
            Let's Get in Touch
          </p>
          <p className="text-gray-600 mt-2 underline">
            abhuluimendestiny@gmail.com
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white relative z-30 rounded-3xl p-6 shadow-md">
          <Form />
        </div>
      </section>
      <section className="flex flex-col bg-gray-300 text-black">
        <div className="grid grid-cols-4 gap-4">
          {/* First Column (50% Width) - Name */}

          {/* Second Column (25% Width) - Social Handles */}
          <div className="p-4 text-sm flex flex-col items-start bg-gray-200 shadow-2xl rounded-3xl z-10 justify-start gap-2">
            <h3 className="text-lg font-semibold text-left w-full">Socials</h3>
            <p>📸 Instagram: @alexturner_ig</p>
            <p>📘 Facebook: Alex Turner</p>
            <p>📱 WhatsApp: +1234567890</p>
            <p>🔗 LinkedIn: linkedin.com/in/alexturner</p>
            <p>🎨 Behance: behance.net/alexturner</p>
          </div>

          {/* Third Column (25% Width) - Location */}
          <div className="p-4 text-sm flex flex-col items-start bg-gray-200 shadow-2xl rounded-3xl z-10 justify-start gap-2">
            <h3 className="text-lg font-semibold text-left w-full">Location</h3>
            <p>Africa, Nigeria</p>
            <p>Lagos State, Ikeja</p>
            <p>Allen Avenue</p>
            <p>No. 25</p>
          </div>
          <div className="col-span-2 text-7xl p-4 flex items-center justify-center font-bold">
            ALEX TURNER
          </div>
        </div>
        <div className="h-32 gap-4 mt-5 flex">
          {[5, 6, 7, 8, 9, 10].map((num) => (
            <div
              key={num}
              className="relative bg-gray-200 shadow-2xl rounded-3xl flex-1"
            >
              <Image
                fill
                className="object-contain"
                src={`/webdev/floating3d${num}.png`}
                alt={`Floating 3D Image ${num}`}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Page;
