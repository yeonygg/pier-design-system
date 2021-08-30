import PropTypes from 'prop-types';

function BubbleMenuLabel({ children, className, style, onChange, onMouseEnter, onMouseLeave, onFocus, onHover, onBlur }) {
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
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onHover: PropTypes.func,
};

export default BubbleMenuLabel;
