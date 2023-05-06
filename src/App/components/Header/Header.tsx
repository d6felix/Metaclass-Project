import classNames from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as BagIcon } from "./BagIcon.svg";
import styles from "./Header.module.scss";
import { ReactComponent as MenuIcon } from "./MenuIcon.svg";
import { ReactComponent as StoreNameIcon } from "./StoreNameIcon.svg";
import { ReactComponent as UserIcon } from "./UserIcon.svg";

export const Header: React.FC = () => (
  <header className={classNames(styles.header)}>
    <StoreNameIcon className={classNames(styles.header__logo)} />
    <span className={classNames(styles.header__container_link)}>
      <Link className={classNames(styles.header__link)} to="/products">
        <p className={classNames(styles.header__text)}>Products</p>
        <div className={classNames(styles.header__line)} />
      </Link>
      <Link className={classNames(styles.header__link)} to="/categories">
        <p className={classNames(styles.header__text)}>Categories</p>
        <div className={classNames(styles.header__line)} />
      </Link>
      <Link className={classNames(styles.header__link)} to="/products">
        <p className={classNames(styles.header__text)}>About Us</p>
        <div className={classNames(styles.header__line)} />
      </Link>
    </span>
    <div className={classNames(styles.header__container_icons)}>
      <BagIcon
        className={classNames(styles.header__icon_cart, styles.header__icon)}
      />
      <UserIcon
        className={classNames(styles.header__icon_user, styles.header__icon)}
      />
      <MenuIcon
        className={classNames(styles.header__icon_menu, styles.header__icon)}
      />
    </div>
  </header>
);

export default Header;
