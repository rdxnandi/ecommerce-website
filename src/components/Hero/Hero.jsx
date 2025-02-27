import React from "react";
import hero_image from "../assets/hero_image.png";
import hand_icon from "../assets/hand_icon.png";

function Hero() {
  return (
    <div className="h-screen bg-custom-gradient lg:flex">
      <div className="flex flex-col justify-center lg:gap-5 p-10 lg:p-44">
        <h2 className="text-[#090909] text-xl lg:text-2xl font-semibold">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-5">
            <p className="text-[#171717] text-2xl lg:text-8xl font-bold">new</p>
            <img className="w-12 lg:w-28" src={hand_icon} alt={hand_icon} />
          </div>
          <p className="text-[#171717] text-2xl lg:text-8xl font-bold">
            collections
          </p>
          <p className="text-[#171717] text-2xl lg:text-8xl font-bold">
            for everyone
          </p>
        </div>
        <div>
          <div className="flex justify-center mt-4 items-center w-52 gap-4 lg:w-60 h-11 rounded-full lg:mt-7 bg-[#ff4141] text-white text-xl cursor-pointer">
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
