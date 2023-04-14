import Card from "@components/Card";
import { Item } from "@utils/types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./ItemList.module.scss";

export type ItemListProps = {
  itemsData: Item[];
  category_filter?: string[];
  className?: string;
};

export const ItemList: React.FC<ItemListProps> = ({
  itemsData,
  className,
  category_filter = [],
  ...props
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      {itemsData
        .filter((item: Item) => {
          return (
            category_filter.length === 0 ||
            category_filter.includes(item.category)
          );
        })
        .map((item: Item) => {
          return (
            <Link
              key={item.id}
              className={classNames(styles.item)}
              to={`/product/${item.id}`}
            >
              <Card
                image={item.images[0]}
                category={item.category}
                title={item.title}
                subtitle={item.description}
                content={"$ " + item.price}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default ItemList;
