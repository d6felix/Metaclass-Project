import { useState, useEffect } from "react";

import { Item } from "@components/Item/Item";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Product.css";

export const Product = () => {
  const { id } = useParams();
  const [itemData, setItemData] = useState<Item>();

  useEffect(() => {
    const fetch = async (id: string | undefined) => {
      const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setItemData(result.data);
    };

    fetch(id);
  }, [id]);

  return (
    <div>
      {itemData?.title} {itemData?.price}
    </div>
  );
};

export default Product;
