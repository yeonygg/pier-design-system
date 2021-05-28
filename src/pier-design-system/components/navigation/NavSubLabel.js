import PropTypes from 'prop-types';

function NavSubLabel({ children, className, style }) {
    var prefix = 'pier-nav__sub-label',
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

NavSubLabel.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default NavSubLabel;
