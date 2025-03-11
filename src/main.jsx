import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.js";
import Shop from "./pages/Shop.jsx";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kid_banner from "./components/assets/banner_kids.png";
import ShopCategory from "./pages/ShopCategory.jsx";
import SignIn from "./pages/SignIn.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import SignUp from "./pages/SignUp.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Product from "./pages/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/mens",
        element: <ShopCategory banner={men_banner} category="men" />,
      },
      {
        path: "/womens",
        element: <ShopCategory banner={women_banner} category="women" />,
      },
      {
        path: "/kids",
        element: <ShopCategory banner={kid_banner} category="kid" />,
      },
      {
        path: "/signin",
        element: (
          <AuthLayout authentication={false}>
            <SignIn />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </Provider>
);
