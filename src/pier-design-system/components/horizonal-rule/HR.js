import PropTypes from 'prop-types';

function HR({ size, theme, className, style }) {
    let prefix = 'pier-hr',
        classes = prefix;

    switch (size) {
        case 'sm':
            classes += ``;
            break;
        case 'md':
            classes += ` ${prefix}--md`;
            break;
        case 'lg':
            classes += ` ${prefix}--lg`;
            break;
    }

    switch (theme) {
        case 'hero':
            classes += ` ${prefix}--hero`;
            break;
        case 'light':
            classes += ``;
            break;
        case 'dark':
            classes += ` ${prefix}--dark`;
            break;
        case 'gray':
            classes += ` ${prefix}--gray`;
            break;
    }

    className && (classes += ` ${className}`);

    return <hr className={classes} style={style} />;
}

HR.defaultProps = {
    size: 'sm',
    theme: 'light',
};

HR.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    theme: PropTypes.oneOf(['hero', 'light', 'dark', 'gray']),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default HR;
