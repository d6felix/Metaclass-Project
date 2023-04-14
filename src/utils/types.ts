export type Item = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
};

export enum Meta {
  initial = "initial",
  loading = "loading",
  error = "error",
  success = "success",
}

export type PaginationParams = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};
