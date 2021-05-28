import PropTypes from 'prop-types';

function Nav({ children, mobile, className, style }) {
    var prefix = 'pier-nav',
        classes = prefix;

    mobile && (classes += ` ${prefix}--mobile`);

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

Nav.defaultProps = {};

Nav.propTypes = {
    children: PropTypes.node.isRequired,
    mobie: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Nav;
