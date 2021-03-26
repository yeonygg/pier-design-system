import PropTypes from "prop-types";

export default function NavSubItem({ children }) {
	return (
		<div className='pier-nav__sub-item'>
			<div className='pier-nav__sub-item-line'></div>
			{children}
		</div>
	);
}

NavSubItem.propTypes = {
	children: PropTypes.node.isRequired,
};
