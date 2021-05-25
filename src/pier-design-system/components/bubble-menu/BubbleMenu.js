import PropTypes from 'prop-types';

export default function BubbleMenu({ children, open, position, size, dark, className, style }) {
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

    classes += ` ${className}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

BubbleMenu.defaultProps = {
    size: 'md',
    className: '',
};

BubbleMenu.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
    position: PropTypes.string,
    size: PropTypes.string,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
