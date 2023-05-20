import React from "react";
import Header from "./Components/Header/Header";
import Summary from "./Components/Summary/Summary";
import Context from "./Components/Store/Context";
import Productlist from "./Components/ProductList/Productlist";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Context>
      <Header />
      <Summary />
      <Productlist />
      <Footer />
    </Context>
  );
};

export default App;
