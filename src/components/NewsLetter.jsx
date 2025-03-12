import React from "react";

function NewsLetter() {
  return (
    <div className="lg:w-4/6 w-full min-h-[40vh] flex flex-col items-center justify-center m-auto px-12 lg:px-32 py-0 mb-36 bg-custom-gradient gap-7">
      <h1 className="text-[#454545] text-3xl lg:text-5xl">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-xm">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 items-center justify-between bg-white lg:w-[730px] w-[300px] h-16 lg:rounded-full lg:border lg:border-[#e3e3e3] mt-7">
        <input
          type="email"
          placeholder="Your Email id"
          className="lg:w-[500px] w-full lg:border-none border border-[#a4a4a4] py-4 px-2 rounded-xl outline-hidden ml-7 text-[#616161] text-xl"
        />
        <button className="lg:w-52 w-[120px] h-full rounded-full py-3 lg:rounded-full bg-black text-white text-sm lg:text-xl cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
