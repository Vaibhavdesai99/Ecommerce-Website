import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const intialtoken = localStorage.getItem("token");
  const [token, setToken] = useState(intialtoken);

  //   !!token => return true or false : if token of string is empty !!token return true else false
  const userIsLoggedIn = !!token;

  const logInHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  //   to clear token when user logged out
  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
