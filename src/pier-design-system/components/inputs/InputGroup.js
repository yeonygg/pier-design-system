import PropTypes from 'prop-types';
import Label from '../text/Label';

function InputGroup({ children, htmlFor, label, size, error, dark, className, style }) {
    let prefix = `pier-input-group`,
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            <Label htmlFor={htmlFor} size={size} dark={dark}>
                {label}
            </Label>
            {children}
            <p className="pier-input-group__validation">{error}</p>
        </div>
    );
}

InputGroup.defaultProps = {};

InputGroup.propTypes = {
    children: PropTypes.node.isRequired,
    htmlFor: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    error: PropTypes.string,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default InputGroup;
