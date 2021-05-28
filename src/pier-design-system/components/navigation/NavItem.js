import PropTypes from 'prop-types';

function NavItem({ children, icon, className, style }) {
    var prefix = 'pier-nav__item',
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {icon && <span className={'pier-nav__item-icon ' + icon}></span>}
            {children}
        </div>
    );
}

NavItem.defaultProps = {};

NavItem.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default NavItem;
