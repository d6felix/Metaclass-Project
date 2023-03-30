import classNames from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as BagIcon } from "./BagIcon.svg";
import styles from "./Header.module.scss";
import { ReactComponent as StoreNameIcon } from "./StoreNameIcon.svg";
import { ReactComponent as UserIcon } from "./UserIcon.svg";

export const Header = () => (
  <header className={classNames(styles.header)}>
    <StoreNameIcon className={classNames(styles.header__icon)} />
    <Link className={classNames(styles.header__link)} to="/products">
      <p className={classNames(styles.header__text)}>Products</p>
      <div className={classNames(styles.header__line)} />
    </Link>
    <Link className={classNames(styles.header__link)} to="/products">
      <p className={classNames(styles.header__text)}>Categories</p>
      <div className={classNames(styles.header__line)} />
    </Link>
    <Link className={classNames(styles.header__link)} to="/products">
      <p className={classNames(styles.header__text)}>About Us</p>
      <div className={classNames(styles.header__line)} />
    </Link>
    <BagIcon className={classNames(styles.header__cart)} />
    <UserIcon className={classNames(styles.header__user)} />
  </header>
);

export default Header;
