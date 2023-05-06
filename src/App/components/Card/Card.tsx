import classNames from "classnames";

import styles from "./Card.module.scss";

export type CardProps = {
  image: string;
  category: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  content?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  content,
  category,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={classNames(styles.card)}>
      <img className={classNames(styles.card__image)} src={image} alt="card" />
      <div className={classNames(styles.card__container)}>
        <div className={classNames(styles.card__category)}>{category}</div>
        <div className={classNames(styles.card__title)}>{title}</div>
        <div className={classNames(styles.card__subtitle)}>{subtitle}</div>
        {content !== null && (
          <div className={classNames(styles.card__content)}>{content}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
