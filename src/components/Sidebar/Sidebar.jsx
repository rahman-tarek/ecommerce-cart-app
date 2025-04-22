import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Category from "./Category";
import Color from "./Color";
import Price from "./Price";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="cart">
        <AiOutlineShoppingCart size={24} className="cart-icon" />
      </div>
      <Category />
      <Price />
      <Color />
    </div>
  );
};

export default Sidebar;
