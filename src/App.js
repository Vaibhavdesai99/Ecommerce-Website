import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Context from "./Components/Store/Context";
import Productlist from "./Components/ProductList/Productlist";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";

const App = () => {
  return (
    <Context>
      <Header />

      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Store">
        <Productlist />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/ContactUs">
        <ContactUs />
      </Route>
      <Footer />
    </Context>
  );
};

export default App;
