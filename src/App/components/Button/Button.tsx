import { LoaderSize } from "@components/Loader/Loader";
import WithLoader from "@components/WithLoader";
import classNames from "classnames";

import styles from "./Button.module.scss";

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  classname?: string;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={classNames(
        styles.button,
        className,
        disabled || loading ? styles.button_disabled : false,
        loading ? styles.button_loading : false
      )}
    >
      <WithLoader
        loading={loading}
        size={LoaderSize.s}
        className={classNames(styles.button__loader)}
      >
        <div>{children}</div>
      </WithLoader>
    </button>
  );
};

export default Button;
