import Image from "next/image";
import Banner from "@/my_components/scent_store/Banner";
import { MdArrowOutward } from "react-icons/md";
import Word_finder_v2 from "@/my_components/scent_store/Word_Finder/Word_finder_v2";
import { IoStorefrontOutline, IoLogoWhatsapp } from "react-icons/io5"; // Import WhatsApp icon
import localFont from "next/font/local";

import Link from "next/link";

const myFont = localFont({
  src: "./../../fonts/PlaywriteGBS-VariableFont_wght.ttf",
});
const myDancingFont = localFont({
  src: "./../../fonts/DancingScript-Bold.ttf",
});

export default function Home() {
  return (
    <>
      <div className="flex justify-between min-h-screen p-5 pt-20 overflow-hidden">
        <div className="flex justify-center sm:mx-auto md:ml-8  md:items-start">
          <div className="w-full flex-col flex gap-10">
            <div className="w-fit">
              <span
                className={`text-6xl font-bold tracking-wide md:text-4xl  ${myDancingFont.className}`}
              >
                <Word_finder_v2 text={"DISCOVER"} />

                <div className="relative left-12 md:left-12">
                  <Word_finder_v2 text={"YOUR  SCENT"} />
                </div>
              </span>
            </div>
            <Banner />
            <div className="max-w-[40rem] md:max-w-80">
              Explore a world of luxury fragrances designed to inspire your
              senses. Whether you prefer floral, woody, or fresh scents, we have
              something for everyone. Indulge in our carefully curated selection
              of perfumes, perfect for any occasion.
            </div>
            <div className="flex gap-60 md:gap-8 justify-center items-center md:flex-col-reverse left-[500px] top-[470px] z-50">
              <div className="flex md:flex-row flex-wrap justify-center items-center flex-col gap-2">
                <Link
                  className="flex justify-center items-center gap-2 min-w-full bg-[#92B4F4] text-white px-4 py-2 rounded-full hover:bg-blue-700"
                  href="https://wa.me/+2348151725194"
                >
                  <span className="font-semibold whitespace-nowrap">
                    Connect with us
                  </span>
                  <IoLogoWhatsapp
                    size={25}
                    className="cursor-pointer hover:text-blue-300 transition duration-200"
                  />
                </Link>
                <Link
                  href="/"
                  className="flex justify-center items-center gap-2 bg-green-500 min-w-full text-white px-4 py-2 rounded-full hover:bg-green-700"
                >
                  <span>About Our Perfume Store</span>
                  <IoStorefrontOutline
                    size={30}
                    className="cursor-pointer hover:text-blue-500 transition duration-200"
                  />
                </Link>
              </div>

              <div
                className={`-z-10 flex-wrap md:text-4xl text-6xl w-fit font-bold tracking-wide ${myDancingFont.className}`}
              >
                <div>
                  <Word_finder_v2 text={"LUXURY"} />
                </div>
                <div className="relative left-12 md:left-4">
                  <Word_finder_v2 text={"FRAGRANCES"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
