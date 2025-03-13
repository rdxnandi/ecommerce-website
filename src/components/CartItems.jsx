import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CartItems() {
  const [promoCode, setPromoCode] = useState("SHOP10");
  const { getTotalCartAmount, all_product, cartItem, removeFromCart } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const handlePromoChange = (e) => {
    setPromoCode(e.target.value);
  };

  return (
    <div className="mx-4 my-10 lg:mx-[170px] lg:my-[100px]">
      <div className="hidden lg:grid grid-cols-custom-layout items-center gap-16 px-0 py-5 text-[#454545] text-xm font-semibold">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="hidden lg:block h-[3px] bg-[#e2e2e2]" />

      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="flex flex-col lg:grid lg:grid-cols-custom-layout items-center lg:gap-[75px] px-0 py-5 text-[#454545] font-semibold text-[17px]">
                <img className="w-16 h-16 lg:w-[62px]" src={e.image} alt="" />
                <p className="text-center">{e.name}</p>
                <div className="flex items-center">
                  <div className="flex gap-2 items-center">
                    <p>${e.new_price.toFixed(2)}</p>
                    <button className="w-12 h-10 lg:w-[64px] lg:h-[40px] border-2 border-[#ebebeb]">
                      {cartItem[e.id]}
                    </button>
                    <p>${(e.new_price * cartItem[e.id]).toFixed(2)}</p>
                  </div>
                  <FaTrash
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    className="w-[15px] mx-10 my-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}

      <div className="flex mx-0 my-24 flex-col lg:flex-row">
        <div className="lg:flex-1 flex flex-col lg:mt-48 gap-10">
          <h1>Cart Totals</h1>
          <div>
            <div className="flex justify-between px-0 py-4">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between px-0 py-[15px]">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between px-0 py-[15px]">
              <h3 className="font-semibold">Total</h3>
              <h3 className="font-semibold">
                ${getTotalCartAmount().toFixed(2)}
              </h3>
            </div>
          </div>

          <button
            className="w-[262px] h-[58px] bg-[#ff5a5a] text-white text-xm font-semibold cursor-pointer"
            onClick={() => navigate("/checkout")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="lg:flex-1 text-xm mt-16 lg:mt-0">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:w-[504px] mt-4 lg:pl-5 lg:bg-[#eaeaea]">
            <input
              type="text"
              value={promoCode}
              onChange={handlePromoChange}
              placeholder="promo code"
              className="outline-hidden text-xm w-full lg:w-[330px] h-[50px] bg-transparent text-gray-500 border"
            />
            <button className="lg:w-40 lg:h-14 w-20 h-10 text-xm bg-black text-white m-auto cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
