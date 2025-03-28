import React, { useContext, useState } from "react";
import star_icon from "./assets/star_icon.png";
import star_dull_icon from "./assets/star_dull_icon.png";
import { ShopContext } from "../context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [isAdded, setIsAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  function handleAddToCard() {
    addToCart(product.id);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 500);
  }

  return (
    <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row lg:mx-40 my-0 px-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <img
            className="w-36 h-[88px] hover:border-2 hover:border-[#ff4141] cursor-pointer"
            src={product.image}
            alt=""
          />
          <img
            className="w-36 h-[88px] hover:border-2 hover:border-[#ff4141] cursor-pointer"
            src={product.image}
            alt=""
          />
          <img
            className="w-36 h-[88px] hover:border-2 hover:border-[#ff4141] cursor-pointer"
            src={product.image}
            alt=""
          />
          <img
            className="w-36 h-[88px] hover:border-2 hover:border-[#ff4141] cursor-pointer"
            src={product.image}
            alt=""
          />
        </div>
        <div>
          <img className="w-[586px] h-[400px]" src={product.image} alt="" />
        </div>
      </div>
      <div className="lg:mx-16 md:ml-5 sm:ml-5 mt-6 lg:mt-0 my-0 flex flex-col">
        <h1 className="text-[#3d3d3d] lg:text-4xl font-bold">{product.name}</h1>
        <div className="flex items-center mt-[13px] gap-1 text-[#1c1c1c] text-xl">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex mx-0 my-8 gap-7 lg:text-[24px] text-lg font-bold">
          <div className="text-[#818181] line-through">
            ${product.old_price.toFixed(2)}
          </div>
          <div className="text-[#ff4141]">${product.new_price.toFixed(2)}</div>
        </div>
        <div>
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
        </div>
        <div>
          <h1 className="mt-[55px] text-[#656565] text-xl font-semibold">
            Select Size
          </h1>
          <div className="flex mx-0 my-7 gap-5">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className={`px-3 py-2 bg-[#fbfbfb] border-2 border-[#ebebeb] rounded-xs cursor-pointer hover:border-[#ff4141] ${
                  selectedSize === size ? "border-[#ff4141]" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button
          className="px-10 py-4 w-52 text-xm font-semibold text-white bg-[#ff4141] mb-10 cursor-pointer"
          onClick={handleAddToCard}
        >
          {isAdded ? "ADDED" : "ADD TO CART"}
        </button>
        <p className="mt-2">
          <span className="font-semibold">Category :</span>Women , T-Shirt, Crop
          Top
        </p>
        <p className="mt-2">
          <span className="font-semibold">Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
