import React from "react";
import Header from "./Components/Header/Header";
import Summary from "./Components/Summary/Summary";
import Context from "./Components/Store/Context";
import Productlist from "./Components/ProductList/Productlist";

const App = () => {
  return (
    <Context>
      <Header />
      <Summary />
      <Productlist />
    </Context>
  );
};

export default App;
