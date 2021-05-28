import PropTypes from 'prop-types';

export default function LoadingSpinner({ theme, size, dark, className, style }) {
    var prefix = 'pier-loading-spinner',
        classes = prefix;

    switch (theme) {
        case 'default':
            classes += ``;
            break;
        case 'gumgum':
            classes += ` ${prefix}--gumgum`;
            break;
    }

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

    return <div className={classes} style={style}></div>;
}

LoadingSpinner.defaultProps = {
    theme: 'default',
    size: 'md',
};

LoadingSpinner.propTypes = {
    theme: PropTypes.oneOf(['default', 'gumgum']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
