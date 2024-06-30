import {defaultProps, IProps, propTypes} from "./config";

export const Input = ({
    className,
    value,
    onChange,
    placeholder
}: IProps) => {
    return (
        <input
            className={className}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;