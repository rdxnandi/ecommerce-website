import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

function Items(props) {
  const { handleLike, likedItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleImageClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <div className="lg:w-60 min-w-40 min-h-[200px] shadow-md hover:transform hover:scale-105 hover:duration-700 rounded-md p-4 border flex flex-col justify-between">
      <button onClick={() => navigate(`/product/${props.id}`)}>
        <img
          src={props.image}
          alt={props.name}
          className="lg:h-52 h-40 w-full"
          onClick={handleImageClick}
        />
      </button>

      <p className="mx-0 my-1 text-sm">{props.name}</p>

      <div className="flex items-center justify-between lg:gap-12 md:gap-7 gap-2">
        <div className="flex gap-2">
          <div className="text-[#374151] lg:text-xl font-semibold">
            ${props.new_price}
          </div>
          <div className="text-[#8c8c8c] lg:text-xl font-semibold line-through">
            ${props.old_price}
          </div>
        </div>
        <div>
          <button
            className="text-gray-300 lg:text-4xl cursor-pointer"
            onClick={() => handleLike(props.id)}
          >
            {likedItems[props.id] ? (
              <Heart className="text-white fill-red-500" size={18} />
            ) : (
              <Heart className="text-gray-400" size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items;
