import PropTypes from "prop-types";
import {ChangeEventHandler} from "react";

export interface IProps {
    className?: string,
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export const defaultProps = {
    className: "input",
    value: "",
    onChange: new Function()
}

export const propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}