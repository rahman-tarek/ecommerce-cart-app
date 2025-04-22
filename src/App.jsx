import React from "react";
import MainPage from "./components/Main/MainPage";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductProvider from "./context/ProductContext";
const App = () => {
  return (
    <ProductProvider>
      <div className="container">
        <Sidebar />
        <MainPage />
      </div>
    </ProductProvider>
  );
};

export default App;
