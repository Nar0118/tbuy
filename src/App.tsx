import React from "react";
import Search from "./components/features/Search";
import ProductList from "./components/features/ProductList";

const App: React.FC = () => {
  return (
    <div>
      <Search />
      <ProductList />
    </div>
  );
};

export default App;
