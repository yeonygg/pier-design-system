import react from 'react';
import PropTypes from 'prop-types';

export default function IconButton({ children, type, value, icon, size, disabled, cap, pill, error, dark, onClick, className, style }) {
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
        <button className={classes} style={style} type={type} value={value} onClick={onClick}>
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
    children: PropTypes.node,
    type: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    cap: PropTypes.string,
    pill: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};
