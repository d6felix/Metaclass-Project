import { useState } from "react";

import classNames from "classnames";
import "./CheckBox.scss";

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  /** Вызывается при клике на чекбокс */
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
    <label className={classNames("checkbox-container")}>
      <input
        {...props}
        checked={checked}
        disabled={disabled}
        type="checkbox"
        onChange={(e) => {
          onChange(e.target.checked);
          setChecked(e.target.checked);
        }}
        className={classNames("checkbox-container__checkbox-original_hidden", {
          "checkbox-container__checkbox-original_hidden_disabled": disabled,
        })}
      />
      <div
        className={classNames(
          "checkbox-container__checkbox-custom",
          "checkbox"
        )}
      />
    </label>
  );
};

export default CheckBox;
