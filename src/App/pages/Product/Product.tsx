import { useState, useEffect } from "react";

import Card from "@components/Card/Card";
import { Item } from "@utils/types";
import axios from "axios";
import classNames from "classnames";
import { useParams } from "react-router-dom";

import styles from "./Product.module.scss";

export const Product = () => {
  const { id = "0" } = useParams();
  const [itemData, setItemData] = useState<Item>({
    id: 0,
    category: "",
    title: "",
    description: "",
    price: 0,
    images: [],
  });

  useEffect(() => {
    const fetch = async (id: string) => {
      const result = await axios.get(`https://dummyjson.com/products/${id}`);
      setItemData(result.data);
    };

    fetch(id);
  }, [id]);

  return (
    <div className={classNames(styles.product__flex_container)}>
      <Card
        category={itemData.category}
        image={itemData.images[0]}
        title={itemData.title}
        subtitle={itemData.description}
        content={"$ " + itemData.price}
      ></Card>
    </div>
  );
};

export default Product;
