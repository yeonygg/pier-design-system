import PropTypes from 'prop-types';

function InputCombo({ children, className, style, onChange, onMouseEnter, onMouseLeave, onFocus, onHover, onBlur }) {
    let prefix = `pier-input-combo`,
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

InputCombo.defaultProps = {};

InputCombo.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onHover: PropTypes.func,
};

export default InputCombo;
