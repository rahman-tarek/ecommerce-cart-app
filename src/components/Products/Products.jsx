import React from "react";
import ContextHook from "../../context/ContextHook.jsx";
import ProductCard from "./ProductCard";
import "./Products.css";

const Products = () => {
  // Destructure the data from the context
  const { state } = ContextHook();
  return (
    <div className="products-container">
      {state.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
