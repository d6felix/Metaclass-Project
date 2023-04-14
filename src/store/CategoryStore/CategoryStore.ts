import { BASE_URL } from "@utils/constants";
import { Meta } from "@utils/types";
import axios, { AxiosResponse } from "axios";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

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

  get meta(): Meta {
    return this._meta;
  }

  get category(): string[] {
    return this._category;
  }

  get selected(): string[] {
    return this._selected;
  }

  setSelected(categories: string[]): void {
    this._selected = categories;
  }

  async initCategory(): Promise<void> {
    this._meta = Meta.loading;
    this._category = [];

    await axios({
      method: "get",
      url: BASE_URL + "categories",
    })
      .then((response: AxiosResponse<string[]>): void => {
        runInAction((): void => {
          this._meta = Meta.success;
          this._category = response.data;
        });
      })
      .catch((): void =>
        runInAction((): void => {
          this._meta = Meta.error;
          this._category = [];
        })
      );
  }
}
