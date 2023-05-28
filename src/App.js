import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Productlist from "./Components/ProductList/Productlist";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import AuthForm from "./Components/LogInPage/AuthForm";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />

        {/* Private route for the Productlist component */}
        <Route
          path="/Store"
          element={
            <PrivateRoute>
              <Productlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/Store/:id"
          element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/ContactUs" element={<ContactUs />} />

        <Route path="LoginPage" element={<AuthForm />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
