import React, { useContext, useState } from "react";
import Logo from "./assets/logo.png";
import cart_icon from "./assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="flex justify-around shadow-md">
      <div className="flex items-center">
        <img className="h-[100px]" src={Logo} alt={Logo} />
        <p className="text-[#171717] text-lg lg:text-4xl">Stylekart</p>
      </div>
      <ul className="hidden text-[#626262] text-xl lg:flex lg:gap-10">
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => setMenu("shop")}
        >
          <Link to="/">Shop</Link>{" "}
          {menu === "shop" ? (
            <hr className="w-4/5 h-1 rounded-lg bg-[#ff4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => setMenu("mens")}
        >
          <Link to="/mens">Men</Link>{" "}
          {menu === "mens" ? (
            <hr className="w-4/5 h-1 rounded-lg bg-[#ff4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => setMenu("womens")}
        >
          <Link to="/womens">Women</Link>{" "}
          {menu === "womens" ? (
            <hr className="w-4/5 h-1 rounded-lg bg-[#ff4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
          onClick={() => setMenu("kids")}
        >
          <Link to="/kids">Kids</Link>{" "}
          {menu === "kids" ? (
            <hr className="w-4/5 h-1 rounded-lg bg-[#ff4141]" />
          ) : (
            <></>
          )}
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
