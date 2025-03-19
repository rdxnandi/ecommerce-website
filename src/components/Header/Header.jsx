import React, { useContext, useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import Container from "../Container/Container";
import { useSelector } from "react-redux";
import { FaChevronUp, FaChevronDown, FaUser } from "react-icons/fa";
import PersonalInfo from "./PersonalInfo";

function Header() {
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const drowdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drowdownRef.current && !drowdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <nav className="flex lg:justify-around md:justify-between sm:justify-between gap-17">
          <div>
            <Link to="/" className="flex items-center">
              <img className="h-[100px]" src={Logo} alt={Logo} />
              <p className="text-[#171717] text-lg lg:text-4xl">Stylekart</p>
            </Link>
          </div>
          <ul className="fixed bottom-0 left-0 z-50 bg-white w-full h-12 justify-center lg:bg-transparent lg:justify-start lg:h-auto lg:static lg:w-auto text-[#626262] text-xl flex gap-5 lg:gap-10 md:gap-7 sm:gap-7">
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
          <div className="flex items-center lg:gap-11 md:gap-5 sm:gap-5 relative">
            <div className="relative" ref={drowdownRef}>
              <button
                className="p-2 text-gray-600 flex items-center gap-2 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {!authStatus ? (
                  <FaUser className="border border-gray-500 rounded-full w-6 h-6 p-1" />
                ) : (
                  <span className="border border-gray-500 rounded-full w-6 h-6 flex items-center justify-center text-gray-600 font-semibold">
                    {userData?.name?.charAt(0)}
                  </span>
                )}
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 shadow-lg py-3 flex justify-center">
                  {!authStatus && (
                    <button
                      onClick={() => navigate("/signin")}
                      className="w-20 h-10 rounded-md text-xl bg-red-500 text-white active:bg-[#f3f3f3] cursor-pointer"
                    >
                      Sign In
                    </button>
                  )}
                  {authStatus && (
                    <div>
                      <PersonalInfo />
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link to="/cart">
              <img src={cart_icon} alt={cart_icon} className="w-6" />
            </Link>
            <div className="w-5 h-5 flex justify-center items-center lg:-mt-8 lg:-ml-14 md:-ml-6 sm:-ml-6 -mt-6 -ml-1 rounded-xl lg:text-xs text-[12px] bg-red-500 text-white">
              {getTotalCartItems()}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
