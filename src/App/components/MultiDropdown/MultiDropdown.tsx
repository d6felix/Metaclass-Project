import React from "react";

import classNames from "classnames";

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
  value,
  onChange,
  disabled = false,
  pluralizeOptions,
  ...props
}) => {
  let listOfOptions = options.map((item) => {
    return (
      <li
        key={item.key}
        onClick={() => {
          let newValue: Option[];
          if (value.includes(item)) {
            newValue = value.filter((a) => !(a.value === item.value));
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
  let pluralizedOPtions = pluralizeOptions(value);
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <button
        {...props}
        className={classNames("dropdown")}
        disabled={disabled}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {pluralizedOPtions}
      </button>
      {!disabled && visible && <ul>{listOfOptions}</ul>}
    </>
  );
};

export default MultiDropdown;
