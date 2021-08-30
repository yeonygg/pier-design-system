import PropTypes from 'prop-types';

function BubbleMenuItem({ children, divider, onClick, className, style, onChange, onMouseEnter, onMouseLeave, onFocus, onHover, onBlur }) {
    var prefix = 'pier-bubble-menu__item',
        classes = prefix;

    divider && (classes += ` ${prefix}--divider`);

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style} onClick={onClick}>
            {children}
        </div>
    );
}

BubbleMenuItem.defaultProps = {};

BubbleMenuItem.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onHover: PropTypes.func,
};

export default BubbleMenuItem;
