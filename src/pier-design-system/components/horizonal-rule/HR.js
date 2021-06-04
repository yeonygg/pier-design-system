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
        case 'lighter':
            classes += ` ${prefix}--lighter`;
            break;
        case 'light-gray':
            classes += ` ${prefix}--light-gray`;
            break;
        case 'light':
            classes += ``;
            break;
        case 'white':
            classes += ` ${prefix}--white`;
            break;
        case 'dark':
            classes += ` ${prefix}--dark`;
            break;
        case 'darker':
            classes += ` ${prefix}--darker`;
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
    theme: PropTypes.oneOf(['hero', 'white', 'lighter', 'light-gray', 'light', 'dark', 'darker', 'gray']),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default HR;
