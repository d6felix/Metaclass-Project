/** Пропсы, которые принимает компонент CheckBox */
type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  onChange,
  disabled,
  checked,
  ...props
}) => {
  return (
    <input
      {...props}
      checked={checked}
      disabled={disabled}
      type="checkbox"
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};

export default CheckBox;
