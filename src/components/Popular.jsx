import React from "react";
import Items from "./Items";
import data_product from "./assets/data";

function Popular() {
  return (
    <div className="flex flex-col items-center gap-3 mb-24">
      <h1 className="text-[#171717] text-3xl lg:text-5xl font-semibold">
        POPULAR IN MEN
      </h1>
      <hr className="w-48 h-1 lg:h-2 rounded-lg bg-[#252525]" />
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 mt-12 gap-4 lg:gap-7 p-2 lg:p-0">
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

export default Popular;
