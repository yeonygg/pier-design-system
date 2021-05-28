import PropTypes from 'prop-types';

function BodyText({ children, size, color, dark, className, style }) {
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
        case 'light-gray':
            classes += ` ${prefix}--light-gray`;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);

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
    color: PropTypes.oneOf(['default', 'light-gray']),
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default BodyText;
