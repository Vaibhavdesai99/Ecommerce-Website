import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Productlist from "./Components/ProductList/Productlist";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />

        <Route path="/Store" element={<Productlist />} />

        <Route path="/Store/:id" element={<ProductDetails />} />

        <Route path="/about" element={<About />} />

        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
