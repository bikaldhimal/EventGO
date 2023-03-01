import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Login from "./../authentication/login";

const ProtectedRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return isLoggedIn ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
