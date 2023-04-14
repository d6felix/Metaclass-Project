import React, { useState } from "react";

import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import ItemStore from "@store/ItemStore/ItemStore";
import rootStore from "@store/RootStore/instance";
import classNames from "classnames";
import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./Search.module.scss";

type SearchProps = {
  itemStore: ItemStore;
};

export const Search: React.FC<SearchProps> = ({ itemStore }) => {
  const [search, setSearch] = useState<string>("");
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

  return (
    <div className={classNames(styles.search)}>
      <form onSubmit={handleSubmit} className={classNames(styles.search__form)}>
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
      </form>
    </div>
  );
};

export default React.memo(Search);
