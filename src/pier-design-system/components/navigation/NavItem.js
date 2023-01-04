import PropTypes from 'prop-types';

function NavItem({ children, icon, onClick, className, style, dark }) {
    var prefix = 'pier-nav__item',
        classes = prefix;

    className && (classes += ` ${className}`);
    dark && (classes += ` ${prefix}--dark`);

    return (
        <div className={classes} style={style} onClick={onClick} dark={false}>
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
    dark: PropTypes.bool,
    style: PropTypes.object,
};

export default NavItem;
