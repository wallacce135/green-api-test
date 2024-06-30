import {defaultProps, IProps, propTypes} from "./config";

export const Input = ({
    className,
    value,
    onChange
}: IProps) => {
    return (
        <input
            className={className}
            value={value}
            onChange={onChange}
        />
    )
}

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;