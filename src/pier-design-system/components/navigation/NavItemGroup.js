import react from 'react';
import PropTypes from 'prop-types';

export default function NavItemGroup({ children }) {
    return <div className="pier-nav__item-group">{children}</div>;
}

NavItemGroup.defaultProps = {};

NavItemGroup.propTypes = {
    children: PropTypes.node.isRequired,
};
