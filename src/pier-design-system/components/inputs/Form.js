import PropTypes from 'prop-types';

function Form({
    children,
    name,
    action,
    method,
    autocomplete,
    className,
    style,
    onChange,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onHover,
    onBlur,
    onChange,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onHover,
    onBlur,
}) {
    let prefix = `pier-form`,
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <form name={name} action={action} method={method} autoComplete={autocomplete} className={classes} style={style}>
            {children}
        </form>
    );
}

Form.defaultProps = {};

Form.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
    action: PropTypes.string,
    method: PropTypes.string,
    autocomplete: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onHover: PropTypes.func,
};

export default Form;
