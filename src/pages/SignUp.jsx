import React, { useState } from "react";
import { account } from "../components/appwriteConfig";
import { ID } from "appwrite";
import { useAuth } from "../untils/AuthContext";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (createPassword !== confirmPassword) {
      alert("Password do not match!");
      return;
    }

    if (!agreeTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    try {
      const newUser = await account.create(
        ID.unique(),
        email,
        createPassword,
        name
      );

      await account.createEmailPasswordSession(email, createPassword);
      const userData = await account.get();
      setUser(userData);
      navigate("/");
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <div className="w-full min-h-[80vh] bg-[#fce3fe] py-24">
      <div className="w-[580px] bg-white m-auto px-14 py-10 rounded-lg">
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
            <input
              type="password"
              name="create_password"
              placeholder="Create Password"
              onChange={(e) => setCreatePassword(e.target.value)}
              required
              className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-hidden text-[#5c5c5c] text-xl"
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-hidden text-[#5c5c5c] text-xl"
            />
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
            className="w-full h-12 rounded-md text-white bg-[#ff4141] mt-[30px] text-2xl uppercase"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
