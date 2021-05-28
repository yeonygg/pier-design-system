import PropTypes from 'prop-types';

function IconButton({ children, size, type, value, icon, disabled, pill, error, dark, onClick, className, style }) {
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

    pill && (classes += ` ${prefix}--pill`);
    error && (classes += ` ${prefix}--error`);
    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);

    className && (classes += ` ${className}`);

    return (
        <button className={classes} style={style} type={type} value={value} onClick={onClick}>
            {icon && <i className={`pier-button-icon__icon ${icon}`}></i>}
            {children}
        </button>
    );
}

IconButton.defaultProps = {
    size: 'md',
};

IconButton.propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    type: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    pill: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default IconButton;
