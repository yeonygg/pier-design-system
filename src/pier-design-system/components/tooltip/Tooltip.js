import PropTypes from 'prop-types';

function Tooltip({ children, size, position, dark, className, text, onClick, style, disabled, open, onMouseLeave, onMouseEnter }) {
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

    switch (size) {
        case 'md':
            classes += ``;
            break;
        case 'lg':
            classes += ` ${prefix}--lg`;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);
    className && (classes += ` ${className}`);
    open && (classes += ` ${prefix}--open`);

    return (
        <span className={classes} data-tooltip={text} style={style} onMouseLeave={onMouseLeave} onClick={onClick} onMouseEnter={onMouseEnter}>
            {children}
        </span>
    );
}

Tooltip.defaultProps = {
    position: 'top',
    size: 'md',
};

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    open: PropTypes.bool,
    size: PropTypes.oneOf(['md', 'lg']),
    position: PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
    dark: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Tooltip;
