import classNames from "classnames";

import WithLoader from "../WithLoader";
import "./Button.css";

/** Возможные раскраски кнопки */
export enum ButtonColor {
  /** Основная, акцентная кнопка */
  primary = "primary",
  /** Второстепенная кнопка */
  secondary = "secondary",
}

/** Пропсы, который принимает компонент Button */
export type ButtonProps = React.PropsWithChildren<{
  /**
   * Если true, то внутри кнопки вместе с children отображается компонент Loader
   * Также кнопка должна переходить в состояние disabled
   * По умолчанию - false
   */
  loading?: boolean;
  /** Цвет кнопки, по умолчанию -  ButtonColor.primary*/
  color?: ButtonColor;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  color = ButtonColor.primary,
  className,
  disabled = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={classNames(
        className,
        { button_disabled: disabled },
        { button_loading: loading },
        `button_color-${color}`
      )}
    >
      <WithLoader loading={loading} children={children} />
    </button>
  );
};

export default Button;
