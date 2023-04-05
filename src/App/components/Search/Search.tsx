import React, { useState } from "react";

import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import MultiDropdown from "@components/MultiDropdown/MultiDropdown";
import ItemStore from "@store/ItemStore/ItemStore";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";

import styles from "./Search.module.scss";

type SearchProps = {
  itemStore: ItemStore;
};

export const Search: React.FC<SearchProps> = ({ itemStore }) => {
  let [search, setSearch] = useSearchParams();

  const handleTitle = (title: string) => {
    setSearch({ title: title });
  };

  const handleSubmit = (event: any) => {
    itemStore.query = "" + search.get("title");
    event.preventDefault();
  };

  return (
    <div className={classNames(styles.search)}>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleTitle}
          value={search.get("title") || ""}
          type="text"
          placeholder="Search"
          className={classNames(styles.search__input)}
        />
        <Button type="submit" className={classNames(styles.search__button)}>
          Find Now
        </Button>
      </form>
      {
        // <MultiDropdown options={} pluralizeOptions={() => {}} />
      }
    </div>
  );
};

export default React.memo(Search);
