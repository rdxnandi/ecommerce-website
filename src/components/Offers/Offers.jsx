import React from "react";
import exclusive_image from "../assets/exclusive_image.png";

function Offers() {
  return (
    <div className="w-4/6 min-h-[60vh] flex m-auto px-36 py-0 mb-36 bg-custom-gradient">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-7xl font-semibold">Exclusive</h1>
        <h1 className="text-[#171717] text-7xl font-semibold">
          Offers For You
        </h1>
        <p className="text-[#171717] text-xm font-semibold mt-5">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-64 h-14 rounded-full bg-[#ff4141] text-white text-xm mt-7">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-end pt-[50px]">
        <img src={exclusive_image} alt={exclusive_image} />
      </div>
    </div>
  );
}

export default Offers;
