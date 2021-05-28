import PropTypes from 'prop-types';

function NavItemDropdown({ children, className, style }) {
    var prefix = 'pier-nav__item-dropdown',
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

NavItemDropdown.defaultProps = {};

NavItemDropdown.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default NavItemDropdown;
