import React from "react";

const ProtectedRoute = ({ children }) => {

  const isAdmin = true;

  return isAdmin ? children : <h1>Access Denied</h1>;
};

export default ProtectedRoute;