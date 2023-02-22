import classNames from "classnames";
//import { useState } from "react";
import "./Input.scss";

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
      className={classNames(className, "input", { input_disabled: disabled })}
      onChange={(e) => onChange(e.target.value)}
    ></input>
  );
};

export default Input;
