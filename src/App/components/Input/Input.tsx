import classNames from "classnames";

/** Пропсы, которые принимает компонент Input */
export type InputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange'
> & {
    /** Значение поля */
    value: string;
    /** Callback, вызываемый при вводе данных в поле */
    onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({ value, onChange, className, disabled, ...props }) => {
    return (
        <input
            {...props}
            type="text"
            value={value}
            disabled={disabled}
            className={classNames(className, { input_disabled: disabled })}
            onChange={e => onChange(e.target.value)}
        >
        </input>
    );
};

export default Input;