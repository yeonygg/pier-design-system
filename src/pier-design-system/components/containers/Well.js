import PropTypes from 'prop-types';

function Well({ children, size, theme, dark, className, style }) {
    let prefix = 'pier-well',
        classes = prefix;

    switch (size) {
        case 'sm':
            classes += ` ${prefix}--sm`;
            break;
        case 'md':
            classes += ` ${prefix}--md`;
            break;
        case 'lg':
            classes += ``;
            break;
    }

    switch (theme) {
        case 'default':
            classes += ``;
            break;
        case 'primary':
            classes += ` ${prefix}--primary`;
            break;
        case 'error':
            classes += ` ${prefix}--error`;
            break;
        case 'green':
            classes += ` ${prefix}--green`;
            break;
        case 'blue':
            classes += ` ${prefix}--blue`;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

Well.defaultProps = {
    size: 'lg',
    theme: 'default',
};

Well.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    theme: PropTypes.oneOf(['default', 'primary', 'error', 'green', 'blue']),
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Well;
