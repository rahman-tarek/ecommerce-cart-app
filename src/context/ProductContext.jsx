import { createContext, useReducer } from "react";
import initialState from "../db/data.js";
import reducer from "./Reducer.jsx";

// Create Context
export const ProductContext = createContext();

// Create Provider Component
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
