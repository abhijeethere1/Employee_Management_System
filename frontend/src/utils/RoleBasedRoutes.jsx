import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
const RoleBasedRoutes = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div>
        <ClipLoader color="#36d7b7" loading={true} size={50} />
      </div>
    );
  }

  if (!requiredRole.includes(user.role)) {
    <Navigate to="/unauthorized" />;
  }

  return user ? children : <Navigate to="/login" />;
};

export default RoleBasedRoutes;
