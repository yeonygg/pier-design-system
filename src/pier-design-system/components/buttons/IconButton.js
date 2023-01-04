import PropTypes from 'prop-types';

function IconButton({
    children,
    size,
    type,
    value,
    icon,
    disabled,
    pill,
<<<<<<< HEAD
=======
    hero,
>>>>>>> develop
    secondary,
    danger,
    dark,
    onClick,
    className,
    style,
    iconStyle,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
}) {
    let prefix = `pier-button-icon`,
        classes = prefix;

    switch (size) {
        case 'xs':
            classes += ` ${prefix}--xs`;
            break;
        case 'sm':
            classes += ``;
            break;
        case 'md':
            classes += ` ${prefix}--md`;
            break;
        case 'lg':
            classes += ` ${prefix}--lg`;
            break;
    }

    pill && (classes += ` ${prefix}--pill`);
    danger && (classes += ` ${prefix}--danger`);
    hero && (classes += ` ${prefix}--hero`);
    secondary && (classes += ` ${prefix}--secondary`);
    hero && (classes += ` ${prefix}--hero`);
    danger && (classes += ` ${prefix}--danger`);
    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);

    className && (classes += ` ${className}`);

    return (
        <button
            className={classes}
            style={style}
            type={type}
            value={value}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
        >
            <i className={`pier-button-icon__icon ${icon}`} style={iconStyle}>
                {children}
            </i>
        </button>
    );
}

IconButton.defaultProps = {
    size: 'sm',
};

IconButton.propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    type: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    pill: PropTypes.bool,
    danger: PropTypes.bool,
    hero: PropTypes.bool,
    secondary: PropTypes.bool,
    danger: PropTypes.bool,
    hero: PropTypes.bool,
    dark: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    iconStyle: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
};

export default IconButton;
