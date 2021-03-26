import PropTypes from "prop-types";

export default function NavItemDropdown({ children }) {
	return <div className='pier-nav__item-dropdown'>{children}</div>;
}

NavItemDropdown.propTypes = {
	children: PropTypes.node,
};
