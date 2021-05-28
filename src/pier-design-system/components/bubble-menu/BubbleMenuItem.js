import PropTypes from 'prop-types';

function BubbleMenuItem({ children, divider, onClick, className, style }) {
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
};

export default BubbleMenuItem;
