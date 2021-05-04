import react from 'react';
import PropTypes from 'prop-types';
import { BodyText } from 'dist';
import Label from '../text/Label';

export default function InputGroup({ children, htmlFor, label, size, error, errorMessage, dark, className, style }) {
    let prefix = `pier-input-group`,
        classes = prefix;

    classes += ` ${className}`;

    return (
        <div className={classes} style={style}>
            <Label htmlFor={htmlFor} size={size} dark={dark}>
                {label}
            </Label>
            {children}
            <BodyText size={size} dark={dark}>
                {errorMessage}
            </BodyText>
        </div>
    );
}

InputGroup.defaultProps = {
    className: '',
    errorMessage: '',
};

InputGroup.propTypes = {
    children: PropTypes.node,
    htmlFor: PropTypes.string,
    size: PropTypes.string,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
