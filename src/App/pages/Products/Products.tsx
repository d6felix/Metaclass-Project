import { useEffect } from "react";

import ItemList from "@components/ItemList";
import Search from "@components/Search";
import Title from "@components/Title";
import ItemStore from "@store/ItemStore";
import { useLocalStore } from "@utils/useLocalStore";
import classNames from "classnames";
import { observer } from "mobx-react-lite";

import styles from "./Products.module.scss";

export const Products: React.FC = () => {
  const itemStore = useLocalStore(() => new ItemStore());

  useEffect(() => {
    itemStore.getItemData();
  }, [itemStore]);

  return (
    <>
      <Title
        title={"Products"}
        subtitle={
          "We display products based on the latest products we have, if you want to see our old products please enter the name of the item."
        }
      />
      <Search />
      <ItemList itemsData={itemStore.list} />
    </>
  );
};

export default observer(Products);
