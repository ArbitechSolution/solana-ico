import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouting = ({ isAuthenticated, Children }) => {
  if (!isAuthenticated) {
    
    return <Navigate to={"/login"} />;
  }
  return Children ? Children : <Outlet />;
};
export default ProtectedRouting;
