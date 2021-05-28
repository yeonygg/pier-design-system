import PropTypes from 'prop-types';
import { Fragment } from 'react';

function Card({ children, size, theme, isLink, dark, onClick, className, style }) {
    let prefix = 'pier-card',
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

    isLink && (classes += ` ${prefix}--link`);
    dark && (classes += ` ${prefix}--dark`);

    className && (classes += ` ${className}`);

    return (
        <Fragment>
            {isLink ? (
                <div className={classes} style={style} onClick={onClick} tabIndex="0">
                    {children}
                </div>
            ) : (
                <div className={classes} style={style}>
                    {children}
                </div>
            )}
        </Fragment>
    );
}

Card.defaultProps = {
    size: 'lg',
    theme: 'default',
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    theme: PropTypes.oneOf(['default', 'primary', 'error', 'green', 'blue']),
    isLink: PropTypes.bool,
    dark: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Card;
