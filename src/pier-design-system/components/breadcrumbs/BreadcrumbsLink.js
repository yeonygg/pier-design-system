import PropTypes from 'prop-types';

function BreadcrumbsLink({ children, disabled, onClick, className, style }) {
    let prefix = 'pier-breadcrumbs__crumb',
        classes = prefix,
        linkClasses;

    disabled ? (linkClasses = 'pier-link--disabled') : (linkClasses = 'pier-link');
    className && (classes += ` ${className}`);

    return (
        <div onClick={onClick} className={classes} style={style}>
            <span className={linkClasses}>{children}</span>
        </div>
    );
}

BreadcrumbsLink.defaultProps = {};

BreadcrumbsLink.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default BreadcrumbsLink;
