import { useEffect, useState } from "react";

import { Card } from "@components/Card/Card";
import { Item } from "@components/Item/Item";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Products.css";

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
    <div className="container">
      {itemsData.map((item: Item) => {
        return (
          <div className="item" key={item.id}>
            <Link to={`/product/${item.id}`}>
              <Card image={item.image} title={item.title} subtitle={""} />
            </Link>
            <div className="price">{item.price} $</div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
