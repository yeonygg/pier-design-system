import PropTypes from 'prop-types';

function Button({ children, theme, size, cap, type, value, icon, disabled, pill, error, dark, block, onClick, className, style }) {
    let prefix = `pier-button-standard`,
        classes = prefix;

    switch (theme) {
        case 'default':
            prefix = 'pier-button-hero';
            classes = prefix;
            break;
        case 'hero':
            prefix = 'pier-button-hero';
            classes = prefix;
            break;
        case 'primary':
            prefix = 'pier-button-standard';
            classes = prefix;
            break;
        case 'secondary':
            prefix = 'pier-button-standard';
            classes = prefix + ` ${prefix}--secondary`;
            break;
    }

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
        case 'cap':
            classes += ``;
            break;
        case 'right':
            classes += ` ${prefix}--cap-right`;
            break;
        case 'none':
            classes += ` ${prefix}--cap-none`;
            break;
        case 'left':
            classes += ` ${prefix}--cap-left`;
            break;
    }

    pill && (classes += ` ${prefix}--pill`);
    error && (classes += ` ${prefix}--error`);
    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);
    block && (classes += ` ${prefix}--block`);

    className && (classes += ` ${className}`);

    function renderButton() {
        if (prefix == 'pier-button-hero') {
            return (
                <button className={classes} style={style} type={type} value={value} onClick={onClick}>
                    <span className="pier-button-hero__content">
                        {icon && <i className={`pier-button-hero__icon ${icon}`}></i>}
                        {children}
                    </span>
                </button>
            );
        } else if (prefix == 'pier-button-standard') {
            return (
                <button className={classes} style={style} type={type} value={value} onClick={onClick}>
                    {icon && <i className={`pier-button-standard__icon ${icon}`}></i>}
                    {children}
                </button>
            );
        }
    }

    return renderButton();
}

Button.defaultProps = {
    theme: 'hero',
    size: 'md',
    cap: 'cap',
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.oneOf(['default', 'hero', 'primary', 'secondary']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    cap: PropTypes.oneOf(['cap', 'none', 'right', 'left']),
    type: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    pill: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    block: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Button;
