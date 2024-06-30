import PropTypes from "prop-types";
import {ChangeEventHandler} from "react";

export interface IProps {
    className?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    readOnly?: boolean;
}

export const defaultProps = {
    className: "output",
    value: "",
    onChange: new Function(),
    readOnly: false,
}

export const propTypes = {
    className: PropTypes.string,
    value: PropTypes.string
}