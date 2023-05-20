import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import Summary from "./Components/Summary/Summary";
import Context from "./Components/Store/Context";
import Productlist from "./Components/ProductList/Productlist";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

const router = createBrowserRouter([{ path: "/About", element: <About /> }]);

const App = () => {
  return (
    <>
      <Context>
        <RouterProvider router={router} />
        <Header />
        <Summary />
        <Productlist />
        <Footer />
      </Context>
    </>
  );
};

export default App;
