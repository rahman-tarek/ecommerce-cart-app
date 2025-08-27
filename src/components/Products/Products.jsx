import { useContext, useEffect, useState } from "react";
import ContextHook from "../../context/ContextHook.jsx";
import ProductCard from "./ProductCard";
import "./Products.css";
import { ProductContext } from "../../context/ProductContext.jsx";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../../redux/fetchProducts.js";

const Products = () => {
  const { products, cartProducts, loading, error } = useSelector(state => state.addProduct);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addCart={cartProducts}
        />
      ))}
    </div>
  );
};

export default Products;
