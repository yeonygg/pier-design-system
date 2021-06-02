import PropTypes from 'prop-types';

function BodyText({ children, size, color, error, dark, className, style }) {
    let prefix = 'pier-body-text',
        classes = prefix;

    switch (size) {
        case 'xs':
            classes += ` ${prefix}--xs`;
            break;
        case 'sm':
            classes += ` ${prefix}--sm`;
            break;
        case 'md':
            classes += ``;
            break;
    }

    switch (color) {
        case 'default':
            classes += ``;
            break;
        case 'light':
            classes += ` ${prefix}--light`;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);
    error && (classes += ` ${prefix}--error`);

    className && (classes += ` ${className}`);

    return (
        <p className={classes} style={style}>
            {children}
        </p>
    );
}

BodyText.defaultProps = {
    size: 'md',
    color: 'default',
};

BodyText.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md']),
    color: PropTypes.oneOf(['default', 'light']),
    error: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default BodyText;
