//import { createContext } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import Product from "./pages/Product";
import Products from "./pages/Products";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product">
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
