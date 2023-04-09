import { useMemo } from "react";

type DOTS_TYPE = "...";
type paginationRange = DOTS_TYPE | number;

export const DOTS: DOTS_TYPE = "...";

export type PaginationParams = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
}: PaginationParams): paginationRange[] => {
  const paginationRange: paginationRange[] = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    throw new Error("Error in calculation.");
  }, [pageSize, siblingCount, currentPage, totalCount]);

  return paginationRange;
};

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;

  return Array.from({ length }, (_, index) => index + start);
};
