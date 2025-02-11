import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
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
    <div className="mx-[170px] my-[100px]">
      <div className="grid grid-cols-custom-layout items-center gap-16 px-0 py-5 text-[#454545] text-xm font-semibold">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2]" />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="grid grid-cols-custom-layout items-center gap-[75px] px-0 py-5 text-[#454545] font-semibold text-[17px]">
                <img className="w-[62px]" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price.toFixed(2)}</p>
                <button className="w-[64px] h-[40px] border-2 border-[#ebebeb]">
                  {cartItem[e.id]}
                </button>
                <p>${(e.new_price * cartItem[e.id]).toFixed(2)}</p>
                <FaTrash
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="w-[15px] mx-10 my-0 cursor-pointer"
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="flex mx-0 my-24">
        <div className="flex-1 flex flex-col mt-48 gap-10">
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
            className="w-[262px] h-[58px] bg-[#ff5a5a] text-white text-xm font-semibold"
            onClick={() => navigate("/checkout")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 text-xm">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="flex w-[504px] mt-4 pl-5 bg-[#eaeaea]">
            <input
              type="text"
              value={promoCode}
              onChange={handlePromoChange}
              placeholder="promo code"
              className="outline-hidden text-xm w-[330px] h-[50px] bg-transparent text-gray-500"
            />
            <button className="w-40 h-14 text-xm bg-black text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
