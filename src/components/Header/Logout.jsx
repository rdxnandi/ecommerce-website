import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function Logout() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="cursor-pointer bg-red-500 px-5 py-2 rounded-md text-white"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default Logout;
