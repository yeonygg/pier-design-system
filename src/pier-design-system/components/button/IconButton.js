import react from 'react';
import PropTypes from 'prop-types';

export default function IconButton({ children, icon, size, disabled, cap, pill, error, dark, className, style }) {
    let prefix = `pier-button-icon`,
        classes = prefix;

    switch (size) {
        case 'sm':
            classes += ` ${prefix}--sm`;
            break;
        case 'md':
            classes += ``;
            break;
        case 'lg':
            classes += ` ${prefix}--lg`;
            break;
    }

    switch (cap) {
        case 'cap-right':
            classes += ` ${prefix}--cap-right`;
            break;
        case 'cap':
            classes += ` ${prefix}--cap`;
            break;
        case 'cap-left':
            classes += ` ${prefix}--cap-left`;
            break;
    }

    pill && (classes += ` ${prefix}--pill`);
    error && (classes += ` ${prefix}--error`);
    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);

    classes += ` ${className}`;

    return (
        <button className={classes} style={style}>
            {icon && <i className={`pier-button-icon__icon ${icon}`}></i>}
            {children}
        </button>
    );
}

IconButton.defaultProps = {
    size: 'md',
    disabled: false,
    cap: '',
    pill: false,
    error: false,
    dark: false,
    className: '',
};

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    cap: PropTypes.string,
    pill: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};