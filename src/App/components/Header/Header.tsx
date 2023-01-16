import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => (
  <header>
    <h1 className="storeName">Fake store</h1>
    <Link className="allProducts" to="/">
      Все товары
    </Link>
  </header>
);

export default Header;
