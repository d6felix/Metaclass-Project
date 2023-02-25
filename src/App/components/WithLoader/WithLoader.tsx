import React from "react";

import { Loader, LoaderSize } from "@components/Loader/Loader";

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
        <Loader loading={loading} size={size} className={className} />
      )}
    </React.Fragment>
  );
};

export default WithLoader;
