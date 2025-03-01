import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Items from "../components/Items";
import SortButton from "../components/SortButton";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <img
        className="block mx-auto my-7 lg:w-10/12 w-full"
        src={props.banner}
        alt={props.banner}
      />
      <div className="flex mx-2 lh:mx-44 my-0 justify-between items-center">
        <p>
          <span className="font-semibold block">Showing 1-12</span> out of 36
          products
        </p>
        <SortButton />
      </div>
      <div className="lg:mx-40 my-5 grid grid-cols-2 lg:grid-cols-4 gap-y-20">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price.toFixed(2)}
                old_price={item.old_price.toFixed(2)}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center mx-auto my-36 w-56 h-14 rounded-full bg-[#ededed] text-[#787878] text-xl cursor-pointer">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
