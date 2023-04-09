import Card from "@components/Card";
import { Item } from "@components/Item/Item";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./ItemList.module.scss";

export type ItemListProps = {
  itemsData: Item[];
  className?: string;
};

export const ItemList: React.FC<ItemListProps> = ({
  itemsData,
  className,
  ...props
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      {itemsData.map((item: Item) => {
        return (
          <Link
            key={item.id}
            className={classNames(styles.item)}
            to={`/product/${item.id}`}
          >
            <Card
              image={item.images[0]}
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
