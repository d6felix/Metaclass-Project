import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { Header } from "./components/Header/Header";
import Product from "./pages/Product";
import Products from "./pages/Products";

const Main = () => {
  return (
    <div>
      <Header />
      {/* Этот элемент отрендерит:
           1) <Users />, если path - /users
           2) <User />, если path - /user/:id
           3) <Index />, если path - /
       */}
      <Outlet />
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="products" element={<Products />} />
            <Route path="product">
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
