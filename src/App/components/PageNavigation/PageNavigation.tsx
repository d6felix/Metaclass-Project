import { usePagination, DOTS } from "@hook/usePagination";
import pageNumberConstrain from "@utils/pageNumberConstrain";
import { Link, useLocation } from "react-router-dom";

export type PageNavigationProps = {
  currentPage: number;
  totalCount: number;
  siblingCount?: number;
  pageSize?: number;
};

export const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  totalCount,
  siblingCount = 1,
  pageSize = 20,
}) => {
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  let { search } = useLocation();

  let pageLinks = paginationRange.map((pageNumber, index) => {
    if (pageNumber === DOTS) {
      return <div key={index}>{"..."}</div>;
    }

    return (
      <Link
        key={index}
        to={`/products/page/${pageNumberConstrain(pageNumber)}${search}`}
      >
        <div>{pageNumber}</div>
      </Link>
    );
  });

  return (
    <>
      <Link
        to={`/products/page/${pageNumberConstrain(currentPage - 1)}${search}`}
      >
        <div>{"<"}</div>
      </Link>{" "}
      {pageLinks}{" "}
      <Link
        to={`/products/page/${pageNumberConstrain(currentPage + 1)}${search}`}
      >
        <div>{">"}</div>
      </Link>
    </>
  );
};

export default PageNavigation;
