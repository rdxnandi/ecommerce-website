import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { useAuth } from "../../untils/AuthContext";
import { account } from "../appwriteConfig";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    await account.deleteSession("current");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="flex justify-around shadow-md">
      <div className="flex items-center">
        <img className="h-[100px]" src={Logo} alt={Logo} />
        <p className="text-[#171717] text-xl uppercase lg:text-4xl">shopper</p>
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
        {user ? (
          <>
            <button
              className="border-2 border-blue-500 w-10 h-10 rounded-full cursor-pointer bg-gray-300 font-bold text-[#414141]"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </button>

            {showDropdown && (
              <div className="absolute right-0 top-20 bg-white shadow-lg p-2 rounded-md">
                <p className="font-bold text-lg">{user.name}</p>
                <p className="text-lg text-gray-600">{user.email}</p>
                <hr className="my-2" />
                <button
                  className="border border-gray-400 px-4 py-1 rounded cursor-pointer"
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to="/signin">
            <button className="w-36 h-12 border border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl active:bg-[#f3f3f3] cursor-pointer">
              Sign In
            </button>
          </Link>
        )}
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
