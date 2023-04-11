import { useQueryParamsStoreInit } from "@hook/useQuersyParamsStoreInit";
import { observer } from "mobx-react-lite";
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
  useQueryParamsStoreInit();
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="products" element={<Products />}>
          <Route path={"page/:page"} element={<Products />} />
        </Route>
        <Route path="product">
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Route>
    </Routes>
  );
};

export default observer(App);
