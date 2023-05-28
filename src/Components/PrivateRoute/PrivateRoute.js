import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Store/AuthContext";

// here we destructure children caz in app.js Productlist is children of PrivateRoute .

// The user who are not logged in they are not going to see Product List page .

const PrivateRoute = ({ children }) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.token;

  if (!isLoggedIn) {
    return <Navigate to="/LoginPage" />;
  }

  return children;
};

export default PrivateRoute;
