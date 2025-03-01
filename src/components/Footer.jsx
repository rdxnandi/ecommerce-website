import React from "react";
import { FaInstagram, FaPinterest, FaWhatsapp } from "react-icons/fa";
import logo from "./assets/logo.png";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px]">
      <div className="flex items-center gap-5">
        <img className="lg:w-[140px] w-[90px]" src={logo} alt={logo} />
        <p className="text-[#383838] text-[30px] lg:text-[46px] font-bold">
          Sytlekart
        </p>
      </div>
      <ul className="flex gap-[10px] lg:gap-[50px] text-[#252525] text-xm lg:text-xl">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-5">
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <FaInstagram />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <FaPinterest />
        </div>
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <FaWhatsapp />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-xm lg:text-xl">
        <hr className="w-[80%] rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p className="text-center">
          Copyright © 2025 Stylekart. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
