import { useEffect, useState } from "react";

import { Card } from "@components/Card/Card";
import { Item } from "@components/Item/Item";
import Search from "@components/Search";
import Title from "@components/Title";
import axios from "axios";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./Products.module.scss";

export const Products: React.FC = () => {
  const [itemsData, setItemsData] = useState<Item[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      setItemsData(result.data);
    };

    fetch();
  }, []);

  return (
    <>
      <Title
        title={"Products"}
        subtitle={
          "We display products based on the latest products we have, if you want to see our old products please enter the name of the item"
        }
      />
      <Search />
      <div className={classNames(styles.container)}>
        {itemsData.map((item: Item) => {
          return (
            <Link
              key={item.id}
              className={classNames(styles.item)}
              to={`/product/${item.id}`}
            >
              <Card
                image={item.image}
                title={item.title}
                subtitle={""}
                content={"$ " + item.price}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Products;
