import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function Items(props) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-56 shadow-md hover:transform hover:scale-105 hover:duration-700 rounded-md p-4 relative">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          className="h-52 w-full"
          onClick={window.scrollTo(0, 0)}
        />
      </Link>
      <button
        className="text-gray-300 text-4xl absolute bottom-4 right-3 cursor-pointer"
        onClick={(e) => {
          setLiked(!liked);
        }}
      >
        {liked ? (
          <Heart className="text-white fill-red-500" />
        ) : (
          <Heart className="text-gray-400" />
        )}
      </button>
      <p className="mx-0 my-1">{props.name}</p>
      <div className="flex gap-5">
        <div className="text-[#374151] text-xl font-semibold">
          ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] text-xl font-semibold line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Items;
