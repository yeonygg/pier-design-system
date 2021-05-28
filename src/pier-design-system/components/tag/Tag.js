import { Fragment } from 'react';
import PropTypes from 'prop-types';

function Tag({ children, size, theme, dark, disabled, pill, isStatic, onClick, className, style }) {
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
    theme: 'default',
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
};

export default Tag;
