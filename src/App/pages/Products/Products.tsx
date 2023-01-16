import { useEffect, useState } from "react";

import { Item } from "@components/Item/Item";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Products.css";

export const Products = () => {
  const [itemsData, setItemsData] = useState([]);

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
              <img className="image" src={item.image} alt=""></img>
              <p>{item.title}</p>
            </Link>
            <p className="price">{item.price} $</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
