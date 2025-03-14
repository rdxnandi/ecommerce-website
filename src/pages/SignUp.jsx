import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../store/authSlice";
import authService from "../appwrite/auth";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm({ mode: "onChange" });
  const [showPassword, setShowPassword] = useState(false);

  const password = watch("password");

  const create = async (data) => {
    setError("");

    try {
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full min-h-[80vh] bg-[#fce3fe] py-24">
      <div className="lg:w-[580px] md:w-[500px] bg-white m-auto px-10 lg:px-14 py-10 rounded-lg">
        <h1 className="text-center my-5 text-2xl font-semibold">Sign Up</h1>
        <form onSubmit={handleSubmit(create)}>
          <div className="flex flex-col gap-7 mt-7">
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("name", {
                required: "Name is Required",
              })}
              className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-hidden text-[#5c5c5c] text-xl"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be valid address",
                },
              })}
              className="h-12 w-full pl-5 border border-[#c9c9c9] rounded-md outline-hidden text-[#5c5c5c] text-xl"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <div className="flex items-center border border-[#c9c9c9] h-12 rounded-md">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 character long",
                  },
                })}
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
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="lg:w-full w-[100px] h-12 rounded-md text-white bg-[#ff4141] mt-[30px] text-xl lg:text-2xl uppercase cursor-pointer hover:bg-red-400 active:bg-red-500"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-5 text-[#5c5c5c] text-xm lg:text-xl">
          Already have an account?{" "}
          <span className="text-[#ff4141] font-semibold cursor-pointer">
            <Link to="/signin">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
