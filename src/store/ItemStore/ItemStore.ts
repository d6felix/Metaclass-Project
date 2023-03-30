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

type PrivateFields = "_list" | "_meta";
export default class ItemStore implements ILocalStore {
  // private readonly _apiStore = new ApiStore(BASE_URL);
  private _list: Item[] = [];
  private _meta: Meta = Meta.initial;

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

  async getItemData() {
    this._meta = Meta.loading;
    this._list = [];

    await axios
      .get(BASE_URL)
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
