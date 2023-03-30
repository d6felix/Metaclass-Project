import { useEffect } from "react";

import Button from "@components/Button";
import ItemList from "@components/ItemList";
import Search from "@components/Search";
import Title from "@components/Title";
import ItemStore from "@store/ItemStore";
import { useLocalStore } from "@utils/useLocalStore";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";

import styles from "./Products.module.scss";

type PageParams = {
  page: string;
};

function constrain(pageNumber: number): number {
  return pageNumber > 10 ? 10 : pageNumber < 1 ? 1 : pageNumber;
}

export const Products: React.FC = () => {
  const { page } = useParams<PageParams>();
  let pageNumber = 1;

  if (page !== undefined) {
    pageNumber = Number.parseInt(page);
  }

  pageNumber = constrain(pageNumber);

  const itemStore = useLocalStore(() => new ItemStore());

  console.log(pageNumber, useParams<PageParams>());

  useEffect(() => {
    itemStore.getItemData(pageNumber);
  }, [itemStore, pageNumber]);

  return (
    <>
      <Title
        title={"Products"}
        subtitle={
          "We display products based on the latest products we have, if you want to see our old products please enter the name of the item."
        }
      />
      <Search />
      <Link to={`/products/page/${constrain(pageNumber - 1)}`}>
        <Button children={"Previous Page"} />
      </Link>
      <Link to={`/products/page/${constrain(pageNumber + 1)}`}>
        <Button children={"Next Page"} />
      </Link>
      <ItemList itemsData={itemStore.list} />
    </>
  );
};

export default observer(Products);
