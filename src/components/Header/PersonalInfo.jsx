import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import { useSelector } from "react-redux";

function PersonalInfo() {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <div>
      <h1 className="font-semibold text-xl mb-2">{userData.name}</h1>
      <p>{userData.email}</p>
      <hr className="my-4" />
      <Logout />
    </div>
  );
}

export default PersonalInfo;
