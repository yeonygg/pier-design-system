import PropTypes from "prop-types";

export default function NavSubLabel({ children }) {
	return <div className='pier-nav__sub-label'>{children}</div>;
}

NavSubLabel.propTypes = {
	children: PropTypes.node.isRequired,
};
