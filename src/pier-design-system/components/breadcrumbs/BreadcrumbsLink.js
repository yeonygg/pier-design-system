import PropTypes from 'prop-types';

function BreadcrumbsLink({ children, className, style }) {
    let prefix = 'pier-breadcrumbs__crumb',
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
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
