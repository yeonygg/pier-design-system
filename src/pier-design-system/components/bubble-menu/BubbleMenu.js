import PropTypes from 'prop-types';

function BubbleMenu({ children, open, size, position, dark, className, style }) {
    var prefix = 'pier-bubble-menu',
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

    switch (position) {
        case 'top left':
            classes += ` ${prefix}--top-left`;
            break;
        case 'top right':
            classes += ` ${prefix}--top-right`;
            break;
        case 'bottom left':
            classes += ``;
            break;
        case 'bottom right':
            classes += ` ${prefix}--bottom-right`;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);
    open && (classes += ` ${prefix}--open`);

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

BubbleMenu.defaultProps = {
    size: 'md',
    position: 'bottom left',
};

BubbleMenu.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    position: PropTypes.oneOf(['top left', 'top right', 'bottom left', 'bottom right']),
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default BubbleMenu;
