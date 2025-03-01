import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function Items(props) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="lg:w-56 w-40 shadow-md hover:transform hover:scale-105 hover:duration-700 rounded-md p-4 relative">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          className="lg:h-52 h-40 w-full"
          onClick={window.scrollTo(0, 0)}
        />
      </Link>
      <button
        className="text-gray-300 w-2 lg:text-4xl absolute bottom-4 right-5 lg:right-3 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          setLiked(!liked);
        }}
      >
        {liked ? (
          <Heart className="text-white fill-red-500" />
        ) : (
          <Heart className="text-gray-400" />
        )}
      </button>
      <p className="mx-0 my-1 text-sm">{props.name}</p>
      <div className="flex lg:gap-5 gap-1">
        <div className="text-[#374151] lg:text-xl font-semibold">
          ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] lg:text-xl font-semibold line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Items;
