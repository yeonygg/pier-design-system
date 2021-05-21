import PropTypes from 'prop-types';

export default function BubbleMenuLabel({ children, className, style }) {
    var prefix = 'pier-bubble-menu__label',
        classes = prefix;

    classes += ` ${className}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

BubbleMenuItem.defaultProps = {};

BubbleMenuItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};
