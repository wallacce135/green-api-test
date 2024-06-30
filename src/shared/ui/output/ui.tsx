import {defaultProps, IProps, propTypes} from "./config";

export const Output = ({
    className,
    value,
    onChange,
    readOnly,
}: IProps) => {
    return (
        <textarea className={className} value={value} onChange={onChange} readOnly={readOnly} />
    )
}

Output.defaultProps = defaultProps;
Output.propTypes = propTypes;