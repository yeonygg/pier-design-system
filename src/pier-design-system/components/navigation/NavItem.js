import PropTypes from "prop-types";

export default function NavItem({ children, icon }) {
	return (
		<div className='pier-nav__item'>
			{icon !== "" && <span className={"pier-nav__item-icon " + icon}></span>}
			{children}
		</div>
	);
}

NavItem.defaultProps = {
	icon: "",
};

NavItem.propTypes = {
	children: PropTypes.node.isRequired,
	icon: PropTypes.string
};
