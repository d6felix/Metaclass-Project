import React from "react";

import classNames from "classnames";

import styles from "./MultiDropdown.module.scss";

/** Вариант для выбора в фильтре */
export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, массив может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
};

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value = [],
  onChange,
  disabled = false,
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
        className={classNames(styles.multidropdown)}
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
