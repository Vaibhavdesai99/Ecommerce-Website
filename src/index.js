import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./Components/Store/Context";
import { AuthContextProvider } from "./Components/Store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </AuthContextProvider>
);
