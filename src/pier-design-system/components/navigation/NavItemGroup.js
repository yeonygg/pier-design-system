import PropTypes from 'prop-types';

function NavItemGroup({ children, className, style }) {
    var prefix = 'pier-nav__item-group',
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

NavItemGroup.defaultProps = {};

NavItemGroup.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default NavItemGroup;
