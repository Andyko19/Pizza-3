import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useUser();

  if (!token) {
    return <Navigate to="/login" replace />; // Redirige a login si no hay token
  }
  return children;
};

export default ProtectedRoute;
