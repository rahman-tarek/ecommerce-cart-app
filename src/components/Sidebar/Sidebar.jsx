import React from "react";
import Category from "./Category";
import Color from "./Color";
import Price from "./Price";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Category />
      <Price />
      <Color />
    </div>
  );
};

export default Sidebar;
