import React from "react";

import classNames from "classnames";

import { Loader, LoaderSize } from "../Loader/Loader";

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
  size?: LoaderSize;
  className?: string;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({
  children,
  loading = true,
  size = LoaderSize.m,
  className,
}) => {
  return (
    <React.Fragment>
      {children}
      {loading && (
        <Loader
          loading={loading}
          size={size}
          className={classNames(className)}
        />
      )}
    </React.Fragment>
  );
};

export default WithLoader;
