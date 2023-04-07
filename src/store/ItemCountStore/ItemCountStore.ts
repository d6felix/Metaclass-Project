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

type PrivateFields = "_meta" | "_count" | "_query";
export default class ItemCountStore {
  // private readonly _apiStore = new ApiStore(BASE_URL);
  private _meta: Meta = Meta.initial;
  private _count: number = 0;
  private _query: string = "";

  constructor() {
    makeObservable<ItemCountStore, PrivateFields>(this, {
      _meta: observable,
      _count: observable,
      _query: observable,
      meta: computed,
      count: computed,
      getItemCount: action,
    });
  }

  get meta(): Meta {
    return this._meta;
  }

  get count(): number {
    return this._count;
  }

  async getItemCount(query: string = "") {
    this._meta = Meta.loading;
    this._count = 0;
    this._query = query ? "?title=" + query : "";

    await axios({
      method: "get",
      url: BASE_URL + this._query,
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
}