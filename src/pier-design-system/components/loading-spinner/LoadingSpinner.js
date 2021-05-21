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
    classes += ` ${className}`;

    return <div className={classes} style={style}></div>;
}

LoadingSpinner.defaultProps = {};

LoadingSpinner.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
