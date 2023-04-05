import { Item } from "@components/Item/Item";
import { ILocalStore } from "@utils/useLocalStore";
import axios from "axios";
import {
  makeObservable,
  observable,
  computed,
  action,
  runInAction,
} from "mobx";

const BASE_URL = "https://api.escuelajs.co/api/v1/products";

export enum Meta {
  initial = "initial", // Процесс не начат
  loading = "loading", // В процессе загрузки
  error = "error", // Завершилось с ошибкой
  success = "success", // Завершилось успешно
}

type PrivateFields = "_list" | "_meta" | "_count" | "_query";
export default class ItemStore implements ILocalStore {
  // private readonly _apiStore = new ApiStore(BASE_URL);
  private _list: Item[] = [];
  private _meta: Meta = Meta.initial;
  private _count: number = 0;
  private _query: string = "";

  constructor() {
    makeObservable<ItemStore, PrivateFields>(this, {
      _list: observable.ref,
      _meta: observable,
      _count: observable,
      _query: observable,
      list: computed,
      meta: computed,
      count: computed,
      query: computed,
      getItemData: action,
      getItemCount: action,
    });
  }

  set query(query: string) {
    if (this._query === "") {
      this._query = query;
    } else {
      this._query += "&" + query;
    }
  }

  get query(): string {
    return this._query;
  }

  get list(): Item[] {
    return this._list;
  }

  get meta(): Meta {
    return this._meta;
  }

  get count(): number {
    return this._count;
  }

  async getItemCount() {
    this._meta = Meta.loading;
    this._count = 0;

    await axios({
      method: "get",
      url: BASE_URL + (this._query === "" ? "" : "?" + this._query),
    })
      .then((response) => {
        runInAction(() => {
          this._meta = Meta.success;
          this._count = response.data.length;
        });
      })
      .catch((error) =>
        runInAction(() => {
          this._meta = Meta.error;
        })
      );
  }

  async getItemData(pageNumber: number) {
    this._meta = Meta.loading;
    this._list = [];

    await axios({
      method: "get",
      url:
        BASE_URL +
        `?offset=${(pageNumber - 1) * 20}&limit=${20}` +
        (this._query !== "" ? "&" + this._query : ""),
    })
      .then((response) => {
        runInAction(() => {
          this._meta = Meta.success;
          this._list = response.data;
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
