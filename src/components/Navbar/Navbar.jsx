import React from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search..." className="searchInput" />
      <div className="navbar-icons">
        <AiOutlineHeart />
        <AiOutlineShoppingCart />
        <AiOutlineUser />
      </div>
    </div>
  );
};

export default Navbar;
