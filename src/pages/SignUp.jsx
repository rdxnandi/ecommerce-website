import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function SignUp() {
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full min-h-[80vh] bg-[#fce3fe] py-24">
      <div className="lg:w-[580px] bg-white m-auto px-10 lg:px-14 py-10 rounded-lg">
        <h1 className="text-center my-5 text-2xl font-semibold">Sign Up</h1>
        <form onSubmit={handleSignUp}>
          <div className="flex flex-col gap-7 mt-7">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-hidden text-[#5c5c5c] text-xl"
            />
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
                type={showCreatePassword ? "text" : "password"}
                name="create_password"
                placeholder="Create Password"
                onChange={(e) => setCreatePassword(e.target.value)}
                required
                className="text-[#5c5c5c] text-xl h-full w-full pl-5 outline-none"
              />
              {createPassword && (
                <button
                  type="button"
                  onClick={() => setShowCreatePassword(!showCreatePassword)}
                  className="text-gray-500 w-[50px] flex items-center justify-center"
                >
                  {showCreatePassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              )}
            </div>
            <div className="flex items-center border border-[#c9c9c9] h-12 rounded-md">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirm_password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="text-[#5c5c5c] text-xl h-full w-full pl-5 outline-none"
              />
              {confirmPassword && (
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-gray-500 w-[50px] flex items-center justify-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              )}
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
            <p>Terms and Condition</p>
          </div>
          <button
            type="submit"
            className="lg:w-full w-[100px] h-12 rounded-md text-white bg-[#ff4141] mt-[30px] text-xl lg:text-2xl uppercase cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
