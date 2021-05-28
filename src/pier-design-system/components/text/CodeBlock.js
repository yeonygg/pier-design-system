import PropTypes from 'prop-types';

function CodeBlock({ children, size, color, dark, className, style }) {
    let prefix = 'pier-codeblock',
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

    switch (color) {
        case 'default':
            classes += ``;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);

    className && (classes += ` ${className}`);

    return (
        <code className={classes} style={style}>
            {children}
        </code>
    );
}

CodeBlock.defaultProps = {
    size: 'md',
    color: 'default',
};

CodeBlock.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md']),
    color: PropTypes.oneOf(['default']),
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default CodeBlock;
