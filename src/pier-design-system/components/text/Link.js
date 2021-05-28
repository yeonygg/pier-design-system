import PropTypes from 'prop-types';

function Link({ children, size, dark, disabled, onClick, className, style }) {
    let prefix = 'pier-link',
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

    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);

    className && (classes += ` ${className}`);

    return (
        <span className={classes} style={style} onClick={onClick}>
            {children}
        </span>
    );
}

Link.defaultProps = {
    size: 'md',
};

Link.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['xs, sm, md']),
    dark: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Link;
