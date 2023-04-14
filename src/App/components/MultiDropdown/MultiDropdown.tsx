import React from "react";

import classNames from "classnames";

import styles from "./MultiDropdown.module.scss";

export type Option = {
  key: string;
  value: string;
};

export type MultiDropdownProps = {
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  className?: string;
  pluralizeOptions: (value: Option[]) => string;
};

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value = [],
  onChange,
  disabled = false,
  className,
  pluralizeOptions,
  ...props
}) => {
  let listOfOptions = options.map((item) => {
    return (
      <li
        className={classNames(
          styles.multidropdown__item,
          value.findIndex((elem) => elem.key === item.key) !== -1
            ? styles.multidropdown__item_selected
            : ""
        )}
        key={item.key}
        onClick={() => {
          let newValue: Option[] = value;
          if (value.findIndex((elem) => elem.key === item.key) !== -1) {
            newValue = value.filter((a) => !(a.key === item.key));
          } else {
            newValue = value.concat([item]);
          }
          return onChange(newValue);
        }}
      >
        {item.value}
      </li>
    );
  });

  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <button
        {...props}
        className={classNames(styles.multidropdown, className)}
        disabled={disabled}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <p>{pluralizeOptions(value)}</p>
      </button>
      {!disabled && visible && (
        <ul className={classNames(styles.multidropdown__itembox)}>
          {listOfOptions}
        </ul>
      )}
    </>
  );
};

export default MultiDropdown;
