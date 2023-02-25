import classNames from "classnames";

import styles from "./Input.module.scss";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> & {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  className,
  disabled,
  placeholder = "text",
  ...props
}) => {
  return (
    <input
      {...props}
      type="text"
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      className={classNames(
        className,
        styles.input,
        disabled ? styles.input_disabled : ""
      )}
      onChange={(e) => onChange(e.target.value)}
    ></input>
  );
};

export default Input;
