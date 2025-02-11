import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-xl my-5 mx-auto p-6 bg-white shadow-md rounded-2xl border">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <div className="flex space-x-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
            className="w-1/2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            onChange={handleChange}
            required
            className="w-1/2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <h1 className="text-xl font-semibold mt-6">Payment Details</h1>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <div className="flex space-x-4">
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            onChange={handleChange}
            required
            className="w-1/2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            onChange={handleChange}
            required
            className="w-1/2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        <div className="space-x-4 flex">
          <button
            className="w-1/2 bg-black text-white py-3 rounded-xl cursor-pointer"
            type="submit"
          >
            Place Order
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="w-1/2 border border-black py-3 rounded-xl cursor-pointer"
          >
            Return to cart
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
