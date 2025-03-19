import React, { createContext, useEffect, useState } from "react";
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : getDefaultCart();
  });

  const [likedItems, setLikedItems] = useState(() => {
    const savedLiked = localStorage.getItem("liked");
    return savedLiked ? JSON.parse(savedLiked) : getDefaultCart();
  });

  const [sortedProduct, setSortedProduct] = useState(all_product);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(likedItems));
  }, [likedItems]);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const sortProducts = (criteria) => {
    let sorted = [...all_product];
    if (criteria === "price-low-high") {
      sorted.sort((a, b) => a.new_price - b.new_price);
    } else if (criteria === "price-high-low") {
      sorted.sort((a, b) => b.new_price - a.new_price);
    }
    setSortedProduct(sorted);
  };

  const handleLike = (itemId) => {
    setLikedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product: sortedProduct,
    cartItem,
    likedItems,
    addToCart,
    removeFromCart,
    sortProducts,
    handleLike,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
