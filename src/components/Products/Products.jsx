import { useContext, useState } from "react";
import ContextHook from "../../context/ContextHook.jsx";
import ProductCard from "./ProductCard";
import "./Products.css";
import { ProductContext } from "../../context/ProductContext.jsx";

const Products = () => {
  const { addCart, setAddCart } = useState(0);
  // Destructure the data from the context
  const { state, dispatch } = ContextHook();

  return (
    <div className="products-container">
      {state.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addCart={addCart}
          setAddCart={setAddCart}
        />
      ))}
    </div>
  );
};

export default Products;
