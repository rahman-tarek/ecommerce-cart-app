import React from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import ContextHook from "../../context/ContextHook.jsx";
import "./Navbar.css";

const Navbar = () => {
  const { state, dispatch } = ContextHook();
  const searchHandle = (e) => {
    const searchValue = e.target.value.toLowerCase();
    // Dispatch the search value to the context

    dispatch({ type: "SEARCH_PRODUCT", payload: searchValue });
  };
  return (
    <div className="navbar">
      <input
        type="text"
        placeholder="Search..."
        className="searchInput"
        onChange={searchHandle}
      />
      <div className="navbar-icons">
        <AiOutlineHeart />
        <AiOutlineShoppingCart />
        <AiOutlineUser />
      </div>
    </div>
  );
};

export default Navbar;
