import react from 'react';
import PropTypes from 'prop-types';
import IconButton from '../buttons/IconButton';

export default function Nav({ children, mobile, className, style }) {
    var prefix = 'pier-nav',
        classes = prefix;

    mobile && (classes += ` ${prefix}--mobile`);

    classes += ` ${className}`;

    return (
        <div className={classes} style={style}>
            <IconButton icon="" size="sm" style={{ position: 'absolute', top: 0, right: 0, zIndex: 99 }}></IconButton>
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
