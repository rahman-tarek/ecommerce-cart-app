import React from "react";
import { BsBag } from "react-icons/bs";
import "./Products.css";

const ProductCard = ({ product }) => {
  const { id, title, img, rating, reviews, prevPrice, newPrice } = product;
  return (
    <div>
      <div className="products-card" key={id}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <div className="rating">
          <span>⭐⭐⭐⭐</span>
          <span>({reviews})</span>
        </div>
        <div className="buttonBottom">
          <div className="price">
            <del>{prevPrice}</del>
            <span>{newPrice}</span>
          </div>
          <BsBag className="bag-icon" size={20} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
