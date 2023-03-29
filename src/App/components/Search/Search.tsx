import React from "react";

import Button from "@components/Button/Button";
import Input from "@components/Input/Input";
import classNames from "classnames";

import styles from "./Search.module.scss";

export type SearchProps = {};

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <React.Fragment>
      <div className={classNames(styles.search)}>
        <Input
          onChange={(e) => {}}
          value=""
          type="text"
          placeholder="Search"
          className={classNames(styles.search__input)}
        />
        <Button className={classNames(styles.search__button)}>Find Now</Button>
      </div>
    </React.Fragment>
  );
};

export default Search;
