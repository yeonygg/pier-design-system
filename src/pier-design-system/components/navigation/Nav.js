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
            {children}
        </div>
    );
}

Nav.defaultProps = {
    className: '',
};

Nav.propTypes = {
    children: PropTypes.node.isRequired,
    mobie: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
