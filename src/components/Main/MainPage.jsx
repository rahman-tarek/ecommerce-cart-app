import React from "react";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products.jsx";
import Recommended from "../Recommended/Recommended";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Recommended />
      <Products />
    </div>
  );
};

export default MainPage;
