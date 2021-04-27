import react from 'react';
import PropTypes from 'prop-types';

export default function BreadcrumbsLink({ children, disabled, className, style }) {
    let prefix = 'pier-breadcrumbs',
        crumbClasses = prefix + '__crumb',
        linkClasses = 'pier-link';

    disabled && (linkClasses += ` pier-link--disabled`);

    className !== '' && (crumbClasses += ` ${className}`);

    return (
        <div className={crumbClasses} style={style}>
            <span className={linkClasses}>{children}</span>
        </div>
    );
}

BreadcrumbsLink.defaultProps = {
    disabled: false,
    className: '',
};

BreadcrumbsLink.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
