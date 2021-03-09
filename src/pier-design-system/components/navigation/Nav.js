import PropTypes from "prop-types";

export default function Nav({ children }) {
	return (
		<div>
			{children}
		</div>
	)
}

Nav.defaultProps = {

}

Nav.propTypes = {
	children: PropTypes.node.isRequired
}