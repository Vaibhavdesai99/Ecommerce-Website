import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Context from "./Components/Store/Context";
import Productlist from "./Components/ProductList/Productlist";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

const App = () => {
  return (
    <Context>
      <Header />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Store" element={<Productlist />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Context>
  );
};

export default App;
