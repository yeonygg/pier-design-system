import PropTypes from 'prop-types';

function Form({ children, name, action, method, autocomplete, className, style }) {
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
};

export default Form;
