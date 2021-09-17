import PropTypes from 'prop-types';

function NavItem({ children, icon, onClick, className, style }) {
    var prefix = 'pier-nav__item',
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style} onClick={onClick}>
            {icon && <span className={'pier-nav__item-icon ' + icon}></span>}
            {children}
        </div>
    );
}

NavItem.defaultProps = {};

NavItem.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default NavItem;
