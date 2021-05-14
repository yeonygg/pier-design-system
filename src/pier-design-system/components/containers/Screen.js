import react from 'react';
import PropTypes from 'prop-types';

export default function Screen({ children, className, style }) {
    let prefix = 'pier-screen',
        classes = prefix;

    classes += ` ${className}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

Screen.defaultProps = {
    className: '',
};

Screen.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};
