import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { useLocation, Outlet } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  });

  return !loading ? (
    <>
      <div>
        {!isCheckoutPage && <Header />}
        <main>
          <Outlet />
        </main>
        {!isCheckoutPage && <Footer />}
      </div>
    </>
  ) : null;
}

export default App;
