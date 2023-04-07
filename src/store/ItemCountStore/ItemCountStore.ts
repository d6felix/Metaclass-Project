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

type PrivateFields = "_meta" | "_count";
export default class ItemCountStore {
  // private readonly _apiStore = new ApiStore(BASE_URL);
  private _meta: Meta = Meta.initial;
  private _count: number = 0;

  constructor() {
    makeObservable<ItemCountStore, PrivateFields>(this, {
      _meta: observable,
      _count: observable,
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

  async getItemCount() {
    this._meta = Meta.loading;
    this._count = 0;

    await axios({
      method: "get",
      url: BASE_URL,
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
