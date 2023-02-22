import classNames from "classnames";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => (
  <header className={classNames("header")}>
    <div className={classNames("store-icon")}></div>
    <h1 className={classNames("store-name")}>Fake store</h1>

    <Link className="allProducts" to="/">
      Все товары
    </Link>
  </header>
);

export default Header;
