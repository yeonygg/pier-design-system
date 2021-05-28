import PropTypes from 'prop-types';

function ListItem({ children, className, style }) {
    let prefix = 'pier-list',
        classes = `${prefix}__item`;

    className && (classes += ` ${className}`);

    return (
        <li className={classes} style={style}>
            <div className={`${prefix}__content`}>{children}</div>
        </li>
    );
}

ListItem.defaultProps = {};

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default ListItem;
