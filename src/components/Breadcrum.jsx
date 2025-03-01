import React from "react";
import arrow_icon from "./assets/breadcrum_arrow.png";

function Breadcrum(props) {
  const { product } = props;

  return (
    <div className="flex items-center gap-2 text-[#5e5e5e] text-xm font-semibold mx-40 my-14 capitalize">
      HOME <img src={arrow_icon} alt={arrow_icon} /> SHOP{" "}
      <img src={arrow_icon} alt="" /> {product.category}{" "}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
}

export default Breadcrum;
