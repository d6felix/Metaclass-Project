import classNames from "classnames";

import styles from "./Title.module.scss";

export type TitleProps = {
  title: string;
  subtitle: string;
};

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1 className={classNames(styles.title)}>{title}</h1>
      <p className={classNames(styles.subtitle)}>{subtitle}</p>
    </>
  );
};

export default Title;
