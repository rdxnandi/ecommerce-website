import React, { useContext, useState } from "react";
import Logo from "./assets/logo.png";
import cart_icon from "./assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="flex justify-around shadow-md">
      <div>
        <Link to="/" className="flex items-center">
          <img className="h-[100px]" src={Logo} alt={Logo} />
          <p className="text-[#171717] text-lg lg:text-4xl">Stylekart</p>
        </Link>
      </div>
      <ul className="hidden text-[#626262] text-xl lg:flex lg:gap-10">
        <li className="flex items-center justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center justify-center cursor-pointer relative after:absolute after:-bottom-1 after:w-4/5 after:h-1 after:rounded-lg ${
                isActive ? "after:bg-[#ff4141]" : ""
              }`
            }
          >
            Shop
          </NavLink>
        </li>
        <li className="flex items-center justify-center">
          <NavLink
            to="/mens"
            className={({ isActive }) =>
              `flex items-center justify-center cursor-pointer relative after:absolute after:-bottom-1 after:w-4/5 after:h-1 after:rounded-lg ${
                isActive ? "after:bg-[#ff4141]" : ""
              }`
            }
          >
            Men
          </NavLink>
        </li>
        <li className="flex items-center justify-center">
          <NavLink
            to="/womens"
            className={({ isActive }) =>
              `flex items-center justify-center cursor-pointer relative after:absolute after:-bottom-1 after:w-4/5 after:h-1 after:rounded-lg ${
                isActive ? "after:bg-[#ff4141]" : ""
              }`
            }
          >
            Women
          </NavLink>
        </li>
        <li className="flex items-center justify-center">
          <NavLink
            to="/kids"
            className={({ isActive }) =>
              `flex items-center justify-center cursor-pointer relative after:absolute after:-bottom-1 after:w-4/5 after:h-1 after:rounded-lg ${
                isActive ? "after:bg-[#ff4141]" : ""
              }`
            }
          >
            Kids
          </NavLink>
        </li>
      </ul>
      <div className="hidden lg:flex lg:items-center lg:gap-11 relative">
        <Link to="/signin">
          <button className="w-36 h-12 border border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl active:bg-[#f3f3f3] cursor-pointer">
            Sign In
          </button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt={cart_icon} className="w-6" />
        </Link>
        <div className="w-5 h-5 flex justify-center items-center -mt-8 -ml-14 rounded-xl text-xs bg-red-500 text-white">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
