import { Link } from "react-router-dom";

export const Header = () => (
  <header>
    <Link to="/">Все товары</Link>
    <Link to="/product">Один товар</Link>
  </header>
);

export default Header;
