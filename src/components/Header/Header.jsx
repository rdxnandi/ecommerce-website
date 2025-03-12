import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import Container from "../Container/Container";
import Logout from "../Header/Logout";
import { useSelector } from "react-redux";

function Header() {
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Shop",
      slug: "/",
      active: true,
    },
    {
      name: "Men",
      slug: "/mens",
      active: true,
    },
    {
      name: "Women",
      slug: "/womens",
      active: true,
    },
    {
      name: "Kids",
      slug: "/kids",
      active: true,
    },
  ];

  return (
    <header className="shadow-md">
      <Container>
        <nav className="flex justify-around">
          <div>
            <Link to="/" className="flex items-center">
              <img className="h-[100px]" src={Logo} alt={Logo} />
              <p className="text-[#171717] text-lg lg:text-4xl">Stylekart</p>
            </Link>
          </div>
          <ul className="fixed bottom-0 bg-white w-full h-12 justify-center lg:bg-transparent lg:justify-start lg:h-auto lg:static lg:w-auto text-[#626262] text-xl flex gap-5 lg:gap-10">
            {navItems.map((item) =>
              item.active ? (
                <li
                  key={item.name}
                  className="flex items-center justify-center"
                >
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      `flex items-center justify-center cursor-pointer relative after:absolute after:-bottom-1 after:w-4/5 after:h-1 after:rounded-lg ${
                        isActive ? "after:bg-[#ff4141]" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
          </ul>
          <div className="flex items-center lg:gap-11 relative">
            {!authStatus && (
              <button
                onClick={() => navigate("/signin")}
                className="w-36 h-12 border border-[#7a7a7a] rounded-[75px] text-[#515151] text-xl active:bg-[#f3f3f3] cursor-pointer"
              >
                Sign In
              </button>
            )}
            {authStatus && (
              <div>
                <Logout />
              </div>
            )}

            <Link to="/cart">
              <img src={cart_icon} alt={cart_icon} className="w-6" />
            </Link>
            <div className="w-5 h-5 flex justify-center items-center -mt-8 -ml-14 rounded-xl text-xs bg-red-500 text-white">
              {getTotalCartItems()}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
