const MAX_PAGE = 10;
const MIN_PAGE = 1;

export default function constrain(pageNumber: number): number {
  return pageNumber > MAX_PAGE
    ? MAX_PAGE
    : pageNumber < MIN_PAGE
    ? MIN_PAGE
    : pageNumber;
}
