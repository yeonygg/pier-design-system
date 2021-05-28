import PropTypes from 'prop-types';

function Screen({ children, className, style }) {
    let prefix = 'pier-screen',
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

Screen.defaultProps = {};

Screen.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Screen;
