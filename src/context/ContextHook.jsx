import { useContext } from "react";
import { ProductContext } from "./ProductContext";

// This custom hook allows us to use the ProductContext in any component
const ContextHook = () => useContext(ProductContext);
export default ContextHook;
