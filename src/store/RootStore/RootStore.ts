import CategoryStore from "@store/CategoryStore";
import ItemCountStore from "@store/ItemCountStore";
import PaginationParamsStore from "@store/PaginationParamsStore/PaginationParamsStore";
import QueryParamsStore from "@store/QueryParamsStore";

export default class RootStore {
  readonly query = new QueryParamsStore();
  readonly count = new ItemCountStore();
  readonly page = new PaginationParamsStore();
  readonly category = new CategoryStore();
  constructor() {
    this.category.initCategory();
    this.count.fetchItemCount();
  }
}
