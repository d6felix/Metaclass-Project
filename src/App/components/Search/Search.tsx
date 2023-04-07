import React, { useState } from "react";

import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
//import MultiDropdown from "@components/MultiDropdown/MultiDropdown";
import ItemStore from "@store/ItemStore/ItemStore";
import rootStore from "@store/RootStore/instance";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";

import styles from "./Search.module.scss";

type SearchProps = {
  itemStore: ItemStore;
};

export const Search: React.FC<SearchProps> = ({ itemStore }) => {
  let [search, setSearch] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [_, setSearchParams] = useSearchParams();

  const handleTitle = (title: string) => {
    setSearch(title);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSearchParams("title=" + search);
    rootStore.query.setSearch("title=" + search);
  };

  return (
    <div className={classNames(styles.search)}>
      <form onSubmit={handleSubmit}>
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
      {
        // <MultiDropdown options={} pluralizeOptions={() => {}} />
      }
    </div>
  );
};

export default React.memo(Search);
