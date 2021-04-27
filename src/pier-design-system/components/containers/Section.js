import react from 'react';
import PropTypes from 'prop-types';

export default function Section({ children, padding, className, style }) {
    let classes = 'pier-section';

    switch (padding) {
        case 'xl':
            classes += ' pier-section--xl';
            break;
        case 'lg':
            classes += ' pier-section--lg';
            break;
        case 'md':
            classes += '';
            break;
        case 'sm':
            classes += ' pier-section--sm';
            break;
        case 'xs':
            classes += ' pier-section--xs';
            break;
    }

    classes += ` ${className}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

Section.defaultProps = {
    padding: 'md',
    className: '',
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    padding: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};
