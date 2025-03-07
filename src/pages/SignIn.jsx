import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full min-h-[80vh] bg-[#fce3fe] py-24">
      <div className="lg:w-[580px] bg-white m-auto px-10 lg:px-14 py-10 rounded-lg">
        <h1 className="text-center my-5 text-2xl font-semibold">Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="flex flex-col gap-7 mt-7">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-hidden text-[#5c5c5c] text-xl"
            />
            <div className="flex items-center border border-[#c9c9c9] h-12 rounded-md">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="text-[#5c5c5c] text-xl h-full w-full pl-5 outline-none"
              />
              {password && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 w-[50px] flex items-center justify-center"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="lg:w-full w-[100px] h-12 rounded-md text-white bg-[#ff4141] mt-[30px] text-xl lg:text-2xl cursor-pointer"
          >
            Sign in
          </button>
        </form>
        <p className="mt-5 text-[#5c5c5c] text-xm lg:text-xl">
          Don't have an account?{" "}
          <span className="text-[#ff4141] font-semibold cursor-pointer">
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
