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
    image: "",
  });

  useEffect(() => {
    const fetch = async (id: string) => {
      const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setItemData(result.data);
    };

    fetch(id);
  }, [id]);

  return (
    <div>
      <Card
        image={itemData.image}
        title={itemData.title}
        subtitle={""}
        content={"$ " + itemData.price}
      ></Card>
    </div>
  );
};

export default Product;
