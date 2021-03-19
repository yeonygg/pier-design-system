import PropTypes from "prop-types";

export default function Nav({ children }) {
	return (
		<div className="pier-nav">
			{children}
		</div>
	)
}

Nav.defaultProps = {

}

Nav.propTypes = {
	children: PropTypes.node.isRequired
}