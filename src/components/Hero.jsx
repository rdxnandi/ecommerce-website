import React from "react";
import hero_image from "./assets/hero_image.png";
import hand_icon from "./assets/hand_icon.png";

function Hero() {
  return (
    <div className="min-h-screen sm:min-h-auto bg-custom-gradient lg:flex">
      <div className="flex flex-col justify-center lg:gap-5 p-10 lg:p-44">
        <h2 className="text-[#090909] text-3xl mb-7 lg:mb-0 lg:text-2xl font-semibold">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-5">
            <p className="text-[#171717] text-6xl lg:text-8xl font-bold">new</p>
            <img className="w-20 lg:w-28" src={hand_icon} alt={hand_icon} />
          </div>
          <p className="text-[#171717] text-6xl mb-4 lg:mb-0 lg:text-8xl font-bold">
            collections
          </p>
          <p className="text-[#171717] text-6xl mb-6 lg:mb-0 lg:text-8xl font-bold">
            for everyone
          </p>
        </div>
        <div>
          <div className="flex justify-center mt-4 items-center gap-4 w-60 h-11 rounded-full lg:mt-7 bg-[#ff4141] text-white lg:text-xl text-2xl cursor-pointer">
            <a href="#new-collection">Latest Collection →</a>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img src={hero_image} alt={hero_image} className="w-[450px]" />
      </div>
    </div>
  );
}

export default Hero;
