import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./untils/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </Router>
  </AuthProvider>
);
