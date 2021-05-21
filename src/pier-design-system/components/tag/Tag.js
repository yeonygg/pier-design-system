import { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Tag({ children, size, theme, dark, disabled, pill, isStatic, className, style }) {
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
            classes += ` `;
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

    className !== '' && (classes += ` ${className}`);

    return (
        <Fragment>
            {isStatic ? (
                <span className={classes} style={style}>
                    {children}
                </span>
            ) : (
                <span className={classes} style={style} tabIndex="0">
                    {children}
                </span>
            )}
        </Fragment>
    );
}

Tag.defaultProps = {
    size: 'md',
    className: '',
};

Tag.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
    dark: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
