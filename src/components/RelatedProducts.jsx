import React from "react";
import data_product from "./assets/new_collections";
import Items from "./Items";

function RelatedProducts() {
  return (
    <div className="flex flex-col items-center gap-2 min-h-[90vh]">
      <h1 className="text-[#171717] lg:text-5xl text-3xl font-semibold">
        Related Products
      </h1>
      <hr className="w-48 lg:h-2 h-1 rounded-xl bg-[#252525]" />
      <div className="mt-[50px] grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4 p-2 lg:p-0">
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
