import React from "react";
import ContextHook from "../../context/ContextHook.jsx";

const Category = () => {
  const { state, dispatch } = ContextHook();
  console.log(state);
  // Filter out products category
  const filteredProductsCategory = [
    ...new Set(state.map((product) => product.category)),
  ];
  // dispatch function to filter products by category
  const categoryHandle = (category) => {
    dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: category,
    });
  };
  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <div className="All">
        <input
          type="radio"
          name="All"
          id="All"
          value={"All"}
          onClick={() => categoryHandle("ALL")}
        />
        <label htmlFor="All" id="category-label">
          All
        </label>
      </div>
      {filteredProductsCategory.map((category) => (
        <div key={category}>
          <input
            type="radio"
            id={category}
            name="category"
            value={category}
            onClick={() => categoryHandle(category)}
          />
          <label htmlFor={category} id="category-label">
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Category;
