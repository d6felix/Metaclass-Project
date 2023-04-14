import { useState } from "react";

import classNames from "classnames";

import styles from "./CheckBox.module.scss";

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  onChange,
  disabled,
  checked = false,
  ...props
}) => {
  let setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  [checked, setChecked] = useState(checked);

  return (
    <label className={classNames(styles.checkbox)}>
      <input
        {...props}
        checked={checked}
        disabled={disabled}
        type="checkbox"
        onChange={(e) => {
          onChange(e.target.checked);
          setChecked(e.target.checked);
        }}
        className={classNames(
          styles.checkbox__original_hidden,
          disabled ? styles.checkbox__original_hidden_disabled : ""
        )}
      />
      <div className={classNames(styles.checkbox__custom)} />
    </label>
  );
};

export default CheckBox;
