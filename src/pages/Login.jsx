import React from "react";
import { Link } from "react-router-dom";

function LoinSignup() {
  return (
    <div className="w-full min-h-[80vh] bg-[#fce3fe] py-24">
      <div className="w-[580px] bg-white m-auto px-14 py-10 rounded-lg">
        <h1 className="text-center my-5 text-2xl font-semibold">Login</h1>
        <div className="flex flex-col gap-7 mt-7">
          <input
            type="email"
            placeholder="Email"
            required
            className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-hidden text-[#5c5c5c] text-xl"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-hidden text-[#5c5c5c] text-xl"
          />
        </div>
        <button className="w-full h-12 rounded-md text-white bg-[#ff4141] mt-[30px] text-2xl uppercase">
          submit
        </button>
        <p className="mt-5 text-[#5c5c5c] text-xl">
          Don't have account?{" "}
          <span className="text-[#ff4141] font-semibold cursor-pointer">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoinSignup;
