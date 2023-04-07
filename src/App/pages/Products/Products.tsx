import { useEffect } from "react";

import ItemList from "@components/ItemList";
import PageNavigation from "@components/PageNavigation";
import Search from "@components/Search";
import Title from "@components/Title";
import ItemStore from "@store/ItemStore";
import rootStore from "@store/RootStore";
import pageNumberConstrain from "@utils/pageNumberConstrain";
import { useLocalStore } from "@utils/useLocalStore";
//import classNames from "classnames";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

//import styles from "./Products.module.scss";

type PageParams = {
  page: string;
};

export const Products: React.FC = () => {
  const { page } = useParams<PageParams>();

  let query: any = "";
  runInAction(() => {
    query = rootStore.query.getParam("title");
  });

  let pageNumber = 1;

  if (typeof page === "string") {
    pageNumber = Number.parseInt(page);
  }

  pageNumber = pageNumberConstrain(pageNumber);

  const itemStore = useLocalStore(() => new ItemStore());

  useEffect(() => {
    itemStore.getItemData(pageNumber);
  }, [itemStore, pageNumber, query]);

  useEffect(() => {
    rootStore.count.getItemCount(query);
  }, [query]);

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
      <div>{rootStore.count.count}</div>
      <ItemList itemsData={itemStore.list} />
      <PageNavigation
        currentPage={pageNumber}
        totalCount={rootStore.count.count}
      />
    </>
  );
};

export default observer(Products);
