import PropTypes from 'prop-types';

function BubbleMenuLabel({ children, className, style }) {
    var prefix = 'pier-bubble-menu__label',
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

BubbleMenuLabel.defaultProps = {};

BubbleMenuLabel.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default BubbleMenuLabel;
