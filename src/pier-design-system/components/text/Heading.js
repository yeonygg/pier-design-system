import PropTypes from 'prop-types';

function Heading({ children, size, color, dark, className, style }) {
    let prefix = 'pier-heading',
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
        case 'lg':
            classes += ` ${prefix}--lg`;
            break;
    }

    switch (color) {
        case 'default':
            classes += ``;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);

    className && (classes += ` ${className}`);

    switch (size) {
        case 'lg':
            return (
                <h1 className={classes} style={style}>
                    {children}
                </h1>
            );
        case 'md':
            return (
                <h2 className={classes} style={style}>
                    {children}
                </h2>
            );
        case 'sm':
            return (
                <h3 className={classes} style={style}>
                    {children}
                </h3>
            );
        case 'xs':
            return (
                <h4 className={classes} style={style}>
                    {children}
                </h4>
            );
    }
}

Heading.defaultProps = {
    size: 'md',
    color: 'default',
};

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    color: PropTypes.oneOf(['default']),
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Heading;
