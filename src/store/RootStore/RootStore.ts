import ItemCountStore from "@store/ItemCountStore";
import QueryParamsStore from "@store/QueryParamsStore";

export default class RootStore {
  readonly query = new QueryParamsStore();
  readonly count = new ItemCountStore();
}
