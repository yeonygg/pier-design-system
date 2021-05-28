import PropTypes from 'prop-types';

function Section({ children, padding, className, style }) {
    let prefix = 'pier-section',
        classes = prefix;

    switch (padding) {
        case 'xs':
            classes += ` ${prefix}--xs`;
            break;
        case 'sm':
            classes += ` ${prefix}--sm`;
            break;
        case 'md':
            classes += ``;
            break;
        case 'lg':
            classes += ` ${prefix}--lg`;
            break;
        case 'xl':
            classes += ` ${prefix}--xl`;
            break;
    }

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

Section.defaultProps = {
    padding: 'md',
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    padding: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Section;
