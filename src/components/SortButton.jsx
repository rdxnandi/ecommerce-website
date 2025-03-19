import React, { useContext, useRef, useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

function SortButton() {
  const { sortProducts } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const downRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (downRef.current && !downRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSort = (criteria) => {
    sortProducts(criteria);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={downRef}>
      <button
        className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Sort by
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 bg-white border shadow-md rounded-md w-48 z-50 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button
            className="block w-full text-left px-4 py-2 cursor-pointer"
            onClick={() => handleSort("price-low-high")}
          >
            Price: Low to High
          </button>
          <button
            className="block w-full text-left px-4 py-2 cursor-pointer"
            onClick={() => handleSort("price-high-low")}
          >
            Price: High to Low
          </button>
        </div>
      )}
    </div>
  );
}

export default SortButton;
