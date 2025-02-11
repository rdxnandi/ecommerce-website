import React from "react";
import data_product from "../assets/data";
import Items from "../Items/Items";

function RelatedProducts() {
  return (
    <div className="flex flex-col items-center gap-2 min-h-[90vh]">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        Related Products
      </h1>
      <hr className="w-[200px] h-[6px] rounded-xl bg-[#252525]" />
      <div className="mt-[50px] flex gap-[30px]">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;
