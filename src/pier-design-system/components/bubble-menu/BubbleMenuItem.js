import PropTypes from 'prop-types';

export default function BubbleMenuItem({ children, divider, className, style }) {
    var prefix = 'pier-bubble-menu__item',
        classes = prefix;

    divider && (classes += ` ${prefix}--divider`);
    classes += ` ${className}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

BubbleMenuItem.defaultProps = {
    className: '',
};

BubbleMenuItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};
