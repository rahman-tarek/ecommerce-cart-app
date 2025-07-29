import { createContext, useEffect, useReducer } from "react";
// import initialState from "../db/data.js";
import reducer from "./Reducer.jsx";
import useFetchData from "../hooks/FetchingData";

// Create Context
export const ProductContext = createContext();

// Create Provider Component
const ProductProvider = ({ children }) => {

  // Custom Hook to fetch data
  const { data } = useFetchData('https://dummyjson.com/products');

  // Initialize state with useReducer
  const [state, dispatch] = useReducer(reducer, []);

  // Update state when data is fetched
  useEffect(() => {
    if (data && data.products && data.products.length > 0) {
      dispatch({
        type: "SET_PRODUCTS",
        payload: data.products
      })
    }
  }, [data])

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
