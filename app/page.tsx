import Image from "next/image";
import Footer from "./components/Footer";

import mobileHeroImage from "../images/image-hero-mobile.png";
import desktopHeroImage from "../images/image-hero-desktop.png";

export default function Home() {
  return (
    <main className="grid sm:grid-cols-1 lg:grid-cols-2 lg:mt-12">
      <div className="hero-image-mobile h-72 lg:hidden md:hidden">
        <Image
          src={mobileHeroImage}
          alt="Man with laptop"
          className="w-full max-w-screen-2xl h-full mx-auto"
          width={10000}
          height={10000}
        />
      </div>
      <div className="hero-image-large hidden col-start-2 lg:block mr-36">
        <Image
          src={desktopHeroImage}
          alt="Man with laptop"
          className="w-full max-w-screen-2xl mx-auto h-[55%] lg:w-auto"
          width={10000}
          height={10000}
        />
      </div>
      <div className="copy lg:row-start-1 lg:col-start-1 lg:text-left lg:flex lg:flex-col lg:w-3/4 lg:ml-44 lg:mt-14">
        <h1 className="flex justify-center text-4xl lg:text-8xl mt-11 mb-5 font-bold -z-50">
          Make remote work
        </h1>
        <div className="w-full flex justify-center lg:justify-start">
          <p className="flex justify-center text-center lg:text-left w-4/5 lg:w-4/6 text-[#696969] lg:text-xl lg:font-medium lg:leading-8 lg:mt-7">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <div className="w-full flex justify-center lg:justify-start lg:mt-12">
          <button className="p-5 border-2 border-[#141414] rounded-2xl bg-[#141414] text-white my-5 py-3 lg:px-10 lg:py-5 lg:text-left font-semibold lg:text-xl hover:text-[#141414] hover:bg-[#fafafa]">
            Learn more
          </button>
        </div>
        <Footer />
      </div>
    </main>
  );
}
