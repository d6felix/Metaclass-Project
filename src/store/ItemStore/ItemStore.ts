import rootStore from "@store/RootStore/instance";
import { BASE_URL } from "@utils/constants";
import { Item, Meta } from "@utils/types";
import { ILocalStore } from "@utils/useLocalStore";
import axios from "axios";
import {
  makeObservable,
  observable,
  computed,
  action,
  runInAction,
} from "mobx";

type PrivateFields = "_list" | "_meta";
export default class ItemStore implements ILocalStore {
  // private readonly _apiStore = new ApiStore(BASE_URL);
  private _list: Item[] = [];
  private _meta: Meta = Meta.initial;
  private _query: string = "";

  constructor() {
    makeObservable<ItemStore, PrivateFields>(this, {
      _list: observable.ref,
      _meta: observable,
      list: computed,
      meta: computed,
      getItemData: action,
    });
  }

  get list(): Item[] {
    return this._list;
  }

  get meta(): Meta {
    return this._meta;
  }

  async getItemData(): Promise<void> {
    this._meta = Meta.loading;
    let pageNumber = rootStore.page.currentPage;
    const limit = rootStore.page.pageSize;

    let newQuery =
      rootStore.query.getParam("title") !== undefined
        ? rootStore.query.getParam("title")
        : "";

    if (newQuery !== this._query) {
      this._query = newQuery as string;
      pageNumber = 1;
      runInAction(() => rootStore.page.setCurrentPage(pageNumber));
    }

    const url =
      BASE_URL +
      (this._query === ""
        ? `?skip=${(pageNumber - 1) * limit}&limit=${limit}`
        : `search?skip=${(pageNumber - 1) * limit}&limit=${limit}&q=${
            this._query
          }`);

    await axios({
      method: "get",
      url: url,
    })
      .then((response) => {
        runInAction(() => {
          this._meta = Meta.success;
          this._list = Array.from(response.data.products);
        });
      })
      .catch((error) =>
        runInAction(() => {
          this._meta = Meta.error;
        })
      );
  }

  destroy(): void {}
}
