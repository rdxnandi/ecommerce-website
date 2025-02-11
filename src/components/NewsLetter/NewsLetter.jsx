import React from "react";

function NewsLetter() {
  return (
    <div className="w-4/6 min-h-[40vh] flex flex-col items-center justify-center m-auto px-32 py-0 mb-36 bg-custom-gradient gap-7">
      <h1 className="text-[#454545] text-5xl">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-xm">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[730px] h-16 rounded-full border border-[#e3e3e3] mt-7">
        <input
          type="email"
          placeholder="Your Email id"
          className="w-[500px] outline-none ml-7 text-[#616161] text-xl"
        />
        <button className="w-52 h-full rounded-full bg-black text-white text-xl">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
