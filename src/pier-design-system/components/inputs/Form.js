import react from 'react';
import PropTypes from 'prop-types';

export default function Form({ children, name, action, method, autocomplete, className, style }) {
    let prefix = `pier-form`,
        classes = prefix;

    classes += ` ${className}`;

    return (
        <form name={name} action={action} method={method} autocomplete={autocomplete} className={classes} style={style}>
            {children}
        </form>
    );
}

Form.defaultProps = {
    className: '',
};

Form.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    action: PropTypes.string,
    method: PropTypes.string,
    autocomplete: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
