import PropTypes from "prop-types";

export default function Button({ children, icon, style }) {
	let buttonClasses;

	switch(style) {
		case "default":
			buttonClasses = "ggp-button";
			break;
	}

	return (
		<button className={buttonClasses}>
			{icon && <i className={icon + " -m-r-4"}></i>}
			{children}
		</button>
	)
}

Button.defaultProps = {
	style: "default",
	size: "medium"
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	icon: PropTypes.string,
	style: PropTypes.string
}

