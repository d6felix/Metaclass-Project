import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import Product from "./pages/Product";
import Products from "./pages/Products";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="products" element={<Products />} />
          <Route path="product">
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
