import React from "react";
import { useAuth } from "../context/authContext";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div>
        <ClipLoader color="#36d7b7" loading={true} size={50} />
      </div>
    );
  }
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
