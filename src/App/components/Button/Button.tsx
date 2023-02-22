import classNames from "classnames";

import { LoaderSize } from "../Loader/Loader";
import WithLoader from "../WithLoader";
import "./Button.scss";

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  className,
  disabled = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={classNames(
        "button",
        className,
        { button_disabled: disabled || loading },
        { button_loading: loading }
      )}
    >
      <WithLoader
        loading={loading}
        size={LoaderSize.s}
        className={classNames("button__loader")}
      >
        <div>{children}</div>
      </WithLoader>
    </button>
  );
};

export default Button;
