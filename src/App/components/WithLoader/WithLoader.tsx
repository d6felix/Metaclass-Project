import { Loader } from "../Loader/Loader";

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({
  children,
  loading = true,
}) => {
  return (
    <div>
      {children}
      <Loader loading={loading} />
    </div>
  );
};

export default WithLoader;
