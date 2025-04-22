import React from "react";
import ContextHook from "../../context/ContextHook.jsx";
import "./Recommended.css";

const Recommended = () => {
  // Get state data for recommended products
  const { state, dispatch } = ContextHook();
  // Filter out products brand
  const filteredProductsBrand = [
    ...new Set(state.map((product) => product.company)),
  ];

  // dispatch function to filter products by brand
  const filterProduct = (brand) => {
    dispatch({
      type: "FILTER_BY_BRAND",
      payload: brand,
    });
  };

  return (
    <div className="recommended-container">
      <h2>Recommended</h2>
      <div className="recommended-products">
        {filteredProductsBrand.map((brand) => {
          return (
            <button key={brand} onClick={() => filterProduct(brand)}>
              {brand}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
