import classNames from "classnames";

import styles from "./Loader.module.scss";

export enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

export const Loader: React.FC<LoaderProps> = ({
  loading = true,
  size = LoaderSize.m,
  className,
}) => {
  if (loading) {
    return (
      <div
        className={classNames(
          styles.loader,
          className,
          styles[`loader_size_${size}`]
        )}
      />
    );
  } else {
    return null;
  }
};

export default Loader;
