import react from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, theme, type, value, icon, size, disabled, cap, pill, error, dark, block, onClick, className, style }) {
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
    block && (classes += ` ${prefix}--block`);

    classes += ` ${className}`;

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
    type: 'hero',
    size: 'md',
    disabled: false,
    cap: '',
    pill: false,
    error: false,
    dark: false,
    className: '',
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    cap: PropTypes.string,
    pill: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    block: PropTypes.bool,
    onClick: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
