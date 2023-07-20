import Image from "next/image";

import mobileImage from "../images/image-hero-mobile.png";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Image
          src={mobileImage}
          alt="Man with laptop"
          className="w-full"
          width={10000}
          height={10000}
        />
        <section className="copy">
          <h1 className="text-4xl mt-11 mb-5 font-extrabold flex justify-center">
            Make remote work
          </h1>
          <div className="w-full flex justify-center">
            <p className="flex justify-center text-center w-4/5 text-[#696969]">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
          </div>
        </section>
        <div className="w-full flex justify-center">
          <button className="p-5 rounded-2xl bg-[#141414] text-white my-7 py-4 font-extrabold">
            Learn more
          </button>
        </div>
      </div>
    </main>
  );
}
