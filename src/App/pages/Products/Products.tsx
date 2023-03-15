import { useEffect, useState } from "react";

import { Card } from "@components/Card/Card";
import { Item } from "@components/Item/Item";
import axios from "axios";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./Products.module.scss";

export const Products = () => {
  const [itemsData, setItemsData] = useState<Item[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      setItemsData(result.data);
    };

    fetch();
  }, []);

  return (
    <div className={classNames(styles.container)}>
      {itemsData.map((item: Item) => {
        return (
          <Link className={classNames(styles.item)} to={`/product/${item.id}`}>
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
  );
};

export default Products;
