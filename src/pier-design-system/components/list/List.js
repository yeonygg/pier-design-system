import PropTypes from 'prop-types';
import { Fragment } from 'react';

function List({ children, size, ordered, dark, className, style }) {
    let prefix = 'pier-list',
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

    ordered && (classes += ` ${prefix}--ordered`);
    dark && (classes += ` ${prefix}--dark`);

    className && (classes += ` ${className}`);

    return (
        <Fragment>
            {ordered ? (
                <ol className={classes} style={style}>
                    {children}
                </ol>
            ) : (
                <ul className={classes} style={style}>
                    {children}
                </ul>
            )}
        </Fragment>
    );
}

List.defaultProps = {
    size: 'md',
};

List.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    ordered: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default List;
