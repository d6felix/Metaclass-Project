import axios from "axios";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

export enum Meta {
  initial = "initial", // Процесс не начат
  loading = "loading", // В процессе загрузки
  error = "error", // Завершилось с ошибкой
  success = "success", // Завершилось успешно
}

const BASE_URL = "https://dummyjson.com/products/categories";

type privateFields = "_category" | "_meta" | "_selected";
export default class CategoryStore {
  private _category: string[] = [];
  private _selected: string[] = [];
  private _meta: Meta = Meta.initial;

  constructor() {
    makeObservable<CategoryStore, privateFields>(this, {
      _category: observable.ref,
      _selected: observable.ref,
      _meta: observable,
      category: computed,
      selected: computed,
      initCategory: action,
      setSelected: action,
    });
  }

  get meta() {
    return this._meta;
  }

  get category() {
    return this._category;
  }

  get selected() {
    return this._selected;
  }

  setSelected(categories: string[]) {
    this._selected = categories;
  }

  async initCategory() {
    this._meta = Meta.loading;
    this._category = [];

    await axios({
      method: "get",
      url: BASE_URL,
    })
      .then((response) => {
        runInAction(() => {
          this._meta = Meta.success;
          this._category = response.data;
        });
      })
      .catch((error) =>
        runInAction(() => {
          this._meta = Meta.error;
          this._category = [];
        })
      );
  }
}
