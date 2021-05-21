import PropTypes from 'prop-types';

export default function BubbleMenu({ children, position, dark, className, style }) {
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
            classes += ` ${prefix}--`;
            break;
        case 'top right':
            classes += ` ${prefix}--`;
            break;
        case 'bottom left':
            classes += ``;
            break;
        case 'bottom right':
            classes += ` ${prefix}--`;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);

    classes += ` ${className}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

BubbleMenu.defaultProps = {};

BubbleMenu.propTypes = {
    children: PropTypes.node.isRequired,
    position: PropTypes.string,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
