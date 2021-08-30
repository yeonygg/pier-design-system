import { Fragment } from 'react';
import PropTypes from 'prop-types';

function Tag({
    children,
    size,
    theme,
    dark,
    disabled,
    pill,
    isStatic,
    onClick,
    className,
    style,
    onChange,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onHover,
    onBlur,
}) {
    let prefix = 'pier-tag',
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

    switch (theme) {
        case 'default':
            classes += ``;
            break;
        case 'hero':
            classes += ` ${prefix}--hero`;
            break;
        case 'primary':
            classes += ` ${prefix}--primary`;
            break;
        case 'white':
            classes += ` ${prefix}--white`;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);
    pill && (classes += ` ${prefix}--pill`);
    isStatic && (classes += ` ${prefix}--static`);

    className && (classes += ` ${className}`);

    return (
        <Fragment>
            {isStatic ? (
                <span className={classes} style={style}>
                    {children}
                </span>
            ) : (
                <span className={classes} style={style} onClick={onClick} tabIndex="0">
                    {children}
                </span>
            )}
        </Fragment>
    );
}

Tag.defaultProps = {
    size: 'md',
    position: 'default',
};

Tag.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    theme: PropTypes.oneOf(['default', 'hero', 'primary']),
    dark: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onHover: PropTypes.func,
};

export default Tag;
