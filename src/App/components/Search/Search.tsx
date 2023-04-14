import React, { useState } from "react";

import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import { MultiDropdown, Option } from "@components/MultiDropdown/MultiDropdown";
import ItemStore from "@store/ItemStore/ItemStore";
import rootStore from "@store/RootStore/instance";
import classNames from "classnames";
import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./Search.module.scss";

type SearchProps = {
  itemStore: ItemStore;
  category: string[];
};

export const Search: React.FC<SearchProps> = ({ itemStore, category }) => {
  const [search, setSearch] = useState<string>("");
  const [value, setValue] = useState<Option[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleTitle = (title: string) => {
    setSearch(title);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const query: string = "title=" + search;
    setSearchParams(query);
    rootStore.query.setSearch(query);
    itemStore.getItemData();
    navigate("/products" + (search !== "" ? "?" + query : ""));
  };

  const options = category.map((item, index): Option => {
    return { key: index.toString(), value: item };
  });

  return (
    <div className={classNames(styles.search)}>
      <form onSubmit={handleSubmit} className={classNames(styles.search__form)}>
        <div className={classNames(styles.search__wrapper)}>
          <Input
            onChange={handleTitle}
            value={search}
            type="text"
            placeholder="Search"
            className={classNames(styles.search__input)}
          />
          <Button type="submit" className={classNames(styles.search__button)}>
            Find Now
          </Button>
        </div>
        <MultiDropdown
          className={classNames(styles.search__dropdown)}
          options={options}
          value={value}
          onChange={(value: Option[]) => {
            rootStore.category.setSelected(
              value.map((item: Option): string => item.value)
            );
            return setValue(value);
          }}
          pluralizeOptions={(value: Option[]) => {
            return "Categoies chosen: " + value.length.toString();
          }}
        />
      </form>
    </div>
  );
};

export default React.memo(Search);
