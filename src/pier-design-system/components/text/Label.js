import PropTypes from 'prop-types';

function Label({ children, htmlFor, size, dark, className, style }) {
    let prefix = 'pier-label',
        classes = prefix;

    switch (size) {
        case 'sm':
            classes += ` ${prefix}--sm`;
            break;
        case 'md':
            classes += ``;
            break;
        case 'lg':
            classes += ` ${prefix}--lg`;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);

    className && (classes += ` ${className}`);

    return (
        <p htmlFor={htmlFor} className={classes} style={style}>
            {children}
        </p>
    );
}

Label.defaultProps = {
    size: 'md',
};

Label.propTypes = {
    children: PropTypes.node.isRequired,
    forInput: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Label;
