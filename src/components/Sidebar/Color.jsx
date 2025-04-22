import React from "react";
import ContextHook from "../../context/ContextHook.jsx";

const Color = () => {
  const { state, dispatch } = ContextHook();
  // Filter out products color
  const filteredProductsColor = [
    ...new Set(state.map((product) => product.color)),
  ];
  const handleColorFilter = (color) => {
    // Dispatch color filter action
    dispatch({
      type: "FILTER_BY_COLOR",
      payload: color,
    });
  };
  return (
    <div className="color-container">
      <h2>Colors</h2>
      {filteredProductsColor.map((color) => (
        <div key={color}>
          <input
            type="radio"
            id={color}
            name="color"
            value={color}
            onClick={() => handleColorFilter(color)}
          />
          <label htmlFor={color} id="color-label">
            {color}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Color;
