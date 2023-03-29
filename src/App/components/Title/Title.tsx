import classNames from "classnames";

import styles from "./Title.module.scss";

export type TitleProps = {
  /** Заголовок карточки */
  title: string;
  /** Подзаголовок карточки */
  subtitle: string;
};

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

export default Title;
