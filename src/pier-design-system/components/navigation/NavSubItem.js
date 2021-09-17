import PropTypes from 'prop-types';

function NavSubItem({ children, className, onClick, style }) {
    var prefix = 'pier-nav__sub-item',
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style} onClick={onClick}>
            {children}
        </div>
    );
}

NavSubItem.defaultProps = {};

NavSubItem.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default NavSubItem;
