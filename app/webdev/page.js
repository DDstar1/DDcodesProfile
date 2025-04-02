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
      <section className="relative flex flex-col h-screen w-screen min-h-screen py-12 overflow-hidden bg-gradient-to-t from-black via-purple-900 to-red-600">
        <MagneticImage src="/webdev/cartoon_head.png" alt="Magnetic Image" />

        <h1 className="text-[150px] md:!text-6xl p-0 m-2 !mt-7 text-center">
          hi, i'm alex
        </h1>
        <div className="flex flex-1 md:flex-col  md:justify-between md:items-around  gap-2 mt-10 justify-around">
          <div className=" p-5 md:[text-shadow:4px_4px_12px_black] relative text-white flex-1 z-30 text-2xl md:text-center font-semibold px-5">
            <div className="absolute inset-0 hidden md:block bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 -z-10"></div>
            A 3D Designer passionate about crafting bold and memorable visuals.
            I bring ideas to life with precision, creativity, and attention to
            detail—turning concepts into stunning 3D experiences. 🚀
          </div>
          <div className=" flex-1"></div>
          <div className=" flex flex-1 justify-center md:items-end items-start z-30">
            <button class="animated-gradient rounded-full mt-6 px-8 py-4 text-white font-bold text-xl shadow-lg">
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
      <section
        id="about"
        className="bg-gradient-to-b  from-purple-500 to-black"
      >
        <div className=" text-justify flex pt-10 flex-col md:justify-start items-center justify-evenly w-screen gap-10 min-h-[80vh] relative">
          <SplashShapeDivider color1="black" />
          <h2 className="text-9xl md:text-6xl font-bold text-white z-20 relative mt-2 top-1">
            About Me
          </h2>
          <div className="leading-10 w-[70%] md:w-[95%] text-white md:text-center relative z-20 font-semibold  text-xl">
            <div className="absolute inset-0 hidden md:block bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 -z-10"></div>
            <p className=" mx-auto">
              With over five years of experience in design, I specialize in
              branding, web design, and user experience. My passion lies in
              crafting visually stunning and highly functional designs that not
              only captivate audiences but also drive meaningful engagement.
              Whether it's creating a brand identity from scratch, refining an
              existing design, or developing intuitive user interfaces, I thrive
              on transforming ideas into reality.
            </p>

            <p className="mx-auto mt-4">
              Let’s create something amazing together—something that not only
              looks great but also leaves a lasting impression. Ready to bring
              your vision to life? Let’s make it happen.
            </p>
          </div>

          <Floating_3D
            img_src="/webdev/floating3d1.png"
            from_left={true}
            top_animate_pos={["0%", "10%"]}
          />
          <Floating_3D
            img_src="/webdev/floating3d2.png"
            from_left={false}
            top_animate_pos={["0%", "10%"]}
          />
          <Floating_3D
            img_src="/webdev/floating3d3.png"
            from_left={true}
            top_animate_pos={["60%", "70%"]}
          />
          <Floating_3D
            img_src="/webdev/floating3d4.png"
            from_left={false}
            top_animate_pos={["60%", "70%"]}
          />
        </div>

        <div id="expertise" className="py-10 text-white">
          <h2 className="text-6xl md:text-5xl text-left relative md:sticky md:top-6 font-bold md:px-5 px-20">
            My Expertise
          </h2>
          <div className="flex flex-wrap items-center justify-center md:flex-col md:gap-5 gap-12  md:px-5 px-20 mt-12">
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
                style={{ "--index": index }}
                className="p-8 max-w-[45%] md:max-w-[100%] md:sticky rounded-3xl shadow-lg border border-white border-opacity-20 bg-gray-800 bg-opacity-10 backdrop-blur-lg transition-all hover:scale-105 hover:bg-opacity-20 relative custom-top"
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
      <section
        id="projects"
        className="relative bg-gradient-to-t from-black via-purple-900 to-red-500 md:px-5 pt-10 px-20"
      >
        <SplashShapeDivider color1="black" />

        <h1 className="!text-5xl text-left !sticky top-10 font-bold">
          Projects
        </h1>
        <Projects />
      </section>
      <section id="testimonials" className="bg-black pt-10">
        <h1 className="text-6xl md:text-5xl text-center font-bold text-white">
          What Clients are Saying
        </h1>
        <ScrollTestimonialHorizontal size="md" />
        {/* <ScrollTestimonialHorizontal /> */}
      </section>
      <section
        id="contact"
        className="flex relative flex-row md:flex-col text-black overflow-hidden gap-6 md:px-5 px-12 pt-10 bg-gray-300 w-screen  items-center"
      >
        <SplashShapeDivider color1="black" />
        {/* Contact Info */}
        <div className="flex flex-1 flex-col justify-center items-center text-center p-4 pt-10">
          <p className="text-7xl md:text-4xl relative z-10  font-semibold px-4 py-2 overflow-hidden rounded-full">
            <div className="absolute inset-0 hidden md:block md:bg-gray-300/5  backdrop-blur-sm -z-10"></div>
            Let's Get in Touch
          </p>
          <p className="text-gray-600 mt-2 underline">
            abhuluimendestiny@gmail.com
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white w-[80%] relative z-30 rounded-3xl p-6 shadow-md">
          <Form />
        </div>
      </section>
      <section className="flex flex-col pt-10 relative bg-gray-400 p-3 text-black">
        <SplashShapeDivider color1="#d1d5dc" />
        <div className="flex gap-4 md:flex-col ">
          {/* Social Handles - Top on mobile, first column on desktop */}
          <div className="w-[40%]  md:w-[100%] p-4 text-sm flex flex-col items-start bg-gray-200 shadow-2xl rounded-3xl z-10 justify-start gap-2">
            <h3 className="text-lg font-semibold text-left w-full">Socials</h3>
            <p>📸 Instagram: @alexturner_ig</p>
            <p>📘 Facebook: Alex Turner</p>
            <p>📱 WhatsApp: +1234567890</p>
            <p>🔗 LinkedIn: linkedin.com/in/alexturner</p>
            <p>🎨 Behance: behance.net/alexturner</p>
          </div>
          <div className="flex flex-1 gap-5">
            {/* Location - Bottom on mobile, second column on desktop */}
            <div className="flex-1  p-4 text-sm flex flex-col items-start bg-gray-200 shadow-2xl rounded-3xl z-10 justify-start gap-2">
              <h3 className="text-lg font-semibold text-left w-full">
                Location
              </h3>
              <p>Africa, Nigeria</p>
              <p>Lagos State, Ikeja</p>
              <p>Allen Avenue</p>
              <p>No. 25</p>
            </div>
            <div className="flex-1 md:flex-1 text-7xl md:text-4xl p-4 text-center m-auto z-20 font-bold">
              {/* Name - Center on mobile, spans 2 columns on desktop */}
              ALEX TURNER
            </div>
          </div>
        </div>
        <div className="h-32 gap-4 mt-5 flex">
          {[5, 6, 7, 8, 9, 10].map((num, index) => (
            <div
              key={num}
              className={`relative bg-gray-200 shadow-2xl rounded-3xl flex-1 ${
                index >= 4 ? "block md:hidden" : ""
              }`}
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
