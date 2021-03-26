import PropTypes from "prop-types";
import { useState } from "react";

export default function NavItemContainer({ children, startToggled }) {
	const [toggled, setToggled] = useState(startToggled);

	return (
		<div className='pier-nav__item-container'>
			<span
				className={!toggled ? "pier-nav__item-dropdown-toggle" : "pier-nav__item-dropdown-toggle pier-nav__item-dropdown-toggle--toggled"}
				onClick={() => setToggled(!toggled)}
			></span>
			{children}
		</div>
	);
}

NavItemContainer.defaultProps = {
	startToggled: false
}

NavItemContainer.propTypes = {
	children: PropTypes.node.isRequired,
	startToggled: PropTypes.bool
};
