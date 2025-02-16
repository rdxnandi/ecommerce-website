import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../components/appwriteConfig";
import { useAuth } from "../untils/AuthContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth;

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(email, password);
      const userData = await account.get();
      setUser(userData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-[80vh] bg-[#fce3fe] py-24">
      <div className="w-[580px] bg-white m-auto px-14 py-10 rounded-lg">
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
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-hidden text-[#5c5c5c] text-xl"
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-md text-white bg-[#ff4141] mt-[30px] text-2xl uppercase"
          >
            Login
          </button>
        </form>
        <p className="mt-5 text-[#5c5c5c] text-xl">
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
