import react from 'react';
import PropTypes from 'prop-types';

export default function Label({ children, htmlFor, size, dark, className, style }) {
    let prefix = 'pier-label',
        classes = prefix;

    switch (size) {
        case 'md':
            classes += ``;
            break;
        case 'sm':
            classes += ` ${prefix}--sm`;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);

    classes += ` ${className}`;

    return (
        <p htmlFor={htmlFor} className={classes} style={style}>
            {children}
        </p>
    );
}

Label.defaultProps = {
    size: 'md',
    dark: false,
};

Label.propTypes = {
    children: PropTypes.node.isRequired,
    forInput: PropTypes.string,
    size: PropTypes.string,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
