import { useEffect } from "react";

import ItemList from "@components/ItemList";
import PageNavigation from "@components/PageNavigation";
import Search from "@components/Search";
import Title from "@components/Title";
import ItemStore from "@store/ItemStore";
import pageNumberConstrain from "@utils/pageNumberConstrain";
import { useLocalStore } from "@utils/useLocalStore";
//import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useParams, useSearchParams } from "react-router-dom";

//import styles from "./Products.module.scss";

type PageParams = {
  page: string;
};

export const Products: React.FC = () => {
  const { page } = useParams<PageParams>();
  const [search] = useSearchParams();
  let pageNumber = 1;

  if (typeof page === "string") {
    pageNumber = Number.parseInt(page);
  }

  pageNumber = pageNumberConstrain(pageNumber);

  const itemStore = useLocalStore(() => new ItemStore());

  useEffect(() => {
    itemStore.getItemData(pageNumber);
  }, [itemStore, pageNumber, search]);

  useEffect(() => {
    itemStore.getItemCount();
  }, [itemStore, search]);

  return (
    <>
      <Title
        title={"Products"}
        subtitle={
          "We display products based on the latest products we have, if you want to see our old products please enter the name of the item."
        }
      />
      <Search itemStore={itemStore} />
      <h2>Total Product</h2>
      <div>{itemStore.count}</div>
      <ItemList itemsData={itemStore.list} />
      <PageNavigation currentPage={pageNumber} totalCount={itemStore.count} />
    </>
  );
};

export default observer(Products);
