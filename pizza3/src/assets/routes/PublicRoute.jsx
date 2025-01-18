import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const PublicRoute = ({ children }) => {
  const { token } = useUser();

  if (token) {
    return <Navigate to="/prole" replace />;
  }

  return children;
};

export default PublicRoute;
