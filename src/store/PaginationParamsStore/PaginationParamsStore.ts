import { action, computed, makeObservable, observable } from "mobx";

export type PaginationParams = {
  currentPage: number;
  siblingCount?: number;
  pageSize?: number;
};

type PrivateFields = "_pageSize" | "_siblingCount" | "_currentPage";

export default class PaginationParamsStore {
  private _pageSize: number = 8;
  private _siblingCount: number = 1;
  private _currentPage: number = 1;

  constructor(pageSize?: number, siblingCount?: number) {
    if (pageSize !== undefined) {
      this._pageSize = pageSize;
    }

    if (siblingCount !== undefined) {
      this._siblingCount = siblingCount;
    }

    makeObservable<PaginationParamsStore, PrivateFields>(this, {
      _pageSize: observable,
      _siblingCount: observable,
      _currentPage: observable,
      pageSize: computed,
      siblingCount: computed,
      currentPage: computed,
      setCurrentPage: action,
    });
  }

  get pageSize() {
    return this._pageSize;
  }

  get siblingCount() {
    return this._siblingCount;
  }

  get currentPage() {
    return this._currentPage;
  }

  setCurrentPage(currentPage: number) {
    this._currentPage = currentPage;
  }
}
