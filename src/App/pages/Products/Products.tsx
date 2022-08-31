import { useEffect, useState } from "react";

import { Item } from "@components/Item/Item";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div>
      {itemsData.map((item: Item) => {
        return (
          <div key={item.id}>
            <Link to={`/product/${item.id}`}>
              {item.title} {item.price}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
