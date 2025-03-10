import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kid_banner from "./components/assets/banner_kids.png";
import Checkout from "./components/Checkout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      <div>
        {!isCheckoutPage && <Navbar />}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />

          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {!isCheckoutPage && <Footer />}
      </div>
    </>
  );
}

export default App;
