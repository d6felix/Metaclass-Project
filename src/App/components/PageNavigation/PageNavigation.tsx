import { usePagination, DOTS, PaginationParams } from "@hook/usePagination";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import styles from "./PageNavigation.module.scss";

export const PageNavigation: React.FC<PaginationParams> = ({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
}: PaginationParams) => {
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  let { search } = useLocation();

  let pageLinks = paginationRange.map((pageNumber, index) => {
    if (pageNumber === DOTS) {
      return (
        <div key={index} className={classNames(styles.navigation__dots)}>
          {"..."}
        </div>
      );
    }

    return (
      <Link
        className={classNames(styles.navigation__link)}
        key={index}
        to={`/products/page/${pageNumber}${search}`}
      >
        <div
          className={classNames(
            styles.navigation__pagelink,
            currentPage === pageNumber
              ? styles.navigation__pagelink_selected
              : false
          )}
        >
          {pageNumber}
        </div>
      </Link>
    );
  });

  return (
    <div className={classNames(styles.navigation)}>
      <Link
        className={classNames(styles.navigation)}
        to={`/products/page/${
          currentPage === 1 ? currentPage : currentPage - 1
        }${search}`}
      >
        <div
          className={classNames(
            styles.navigation__arrow,
            styles.navigation__arrow_left,
            currentPage === 1 ? styles.navigation__arrow_disabled : ""
          )}
        ></div>
      </Link>{" "}
      {pageLinks}{" "}
      <Link
        className={classNames(styles.navigation)}
        to={`/products/page/${
          currentPage === paginationRange.at(-1) ? currentPage : currentPage + 1
        }${search}`}
      >
        <div
          className={classNames(
            styles.navigation__arrow,
            styles.navigation__arrow_right,
            currentPage === paginationRange.at(-1)
              ? styles.navigation__arrow_disabled
              : ""
          )}
        ></div>
      </Link>
    </div>
  );
};

export default PageNavigation;
