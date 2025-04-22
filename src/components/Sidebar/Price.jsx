import React from "react";
import ContextHook from "../../context/ContextHook.jsx";

const Price = () => {
  const { state, dispatch } = ContextHook();

  // Filter out products price
  const filteredProductsPrice = [
    ...new Set(state.map((product) => product.newPrice)),
  ];
  // Dispatch price filter action
  const handlePriceFilter = (price) => {
    dispatch({
      type: "FILTER_BY_PRICE",
      payload: price,
    });
  };
  return (
    <div className="price-container">
      <h2>Price</h2>
      {filteredProductsPrice.map((price) => (
        <div key={price}>
          <input
            type="radio"
            id={price}
            name="price"
            value={price}
            onClick={() => handlePriceFilter(price)}
          />
          <label htmlFor={price}>{price}</label>
        </div>
      ))}
    </div>
  );
};

export default Price;
