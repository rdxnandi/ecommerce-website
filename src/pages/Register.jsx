import React from "react";

function Register() {
  return (
    <div className="w-full min-h-[80vh] bg-[#fce3fe] py-24">
      <div className="w-[580px] bg-white m-auto px-14 py-10 rounded-lg">
        <h1 className="text-center my-5 text-2xl font-semibold">Register</h1>
        <div className="flex flex-col gap-7 mt-7">
          <input
            type="text"
            placeholder="Name"
            required
            className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-none text-[#5c5c5c] text-xl"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-none text-[#5c5c5c] text-xl"
          />
          <input
            type="password"
            placeholder="Create Password"
            required
            className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-none text-[#5c5c5c] text-xl"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-none text-[#5c5c5c] text-xl"
          />
        </div>
        <div className="flex gap-3 mt-5">
          <input type="checkbox" />
          <p>Terms and Condition</p>
        </div>
        <button className="w-full h-12 rounded-md text-white bg-[#ff4141] mt-[30px] text-2xl uppercase">
          submit
        </button>
      </div>
    </div>
  );
}

export default Register;
