import { useState, useEffect } from "react";

import Card from "@components/Card/Card";
import { Item } from "@components/Item/Item";
import axios from "axios";
import { useParams } from "react-router-dom";

import styles from "./Product.module.scss";

export const Product = () => {
  const { id = "0" } = useParams();
  const [itemData, setItemData] = useState<Item>({
    id: 0,
    title: "",
    price: 0,
    images: [],
  });

  useEffect(() => {
    const fetch = async (id: string) => {
      const result = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setItemData(result.data);
    };

    fetch(id);
  }, [id]);

  return (
    <div>
      <Card
        image={itemData.images[0]}
        title={itemData.title}
        subtitle={""}
        content={"$ " + itemData.price}
      ></Card>
    </div>
  );
};

export default Product;
