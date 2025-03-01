import React, { useContext, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import { ShopContext } from "../../context/ShopContext";

function SortButton({ onSort }) {
  const [sortOrder, setSortOrder] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (order) => {
    setSortOrder(order);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sort by
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      <div
        className={`absolute left-0 mt-2 bg-white border shadow-md rounded-md w-48 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button className="block w-full text-left px-4 py-2">
          Price: Low to High
        </button>
        <button className="block w-full text-left px-4 py-2">
          Price: High to Low
        </button>
      </div>
    </div>
  );
}

export default SortButton;
