import PropTypes from 'prop-types';

function Tooltip({ children, position, dark, className, text, onClick, style, disabled, open }) {
    let prefix = `pier-tooltip`,
        classes = prefix;

    switch (position) {
        case 'top':
            classes += ` ${prefix}--top`;
            break;
        case 'right':
            classes += ` ${prefix}--right`;
            break;
        case 'left':
            classes += ` ${prefix}--left`;
            break;
        case 'bottom':
            classes += ` ${prefix}--bottom`;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);
    className && (classes += ` ${className}`);
    open && (classes += ` ${prefix}--open`);

    return (
        <span className={classes} data-tooltip={text} style={style}>
            {children}
        </span>
    );
}

Tooltip.defaultProps = {
    position: 'top',
};

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
    dark: PropTypes.bool,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object,
    disabled: PropTypes.bool,
};

export default Tooltip;
