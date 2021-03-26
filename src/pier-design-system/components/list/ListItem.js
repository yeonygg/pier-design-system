import PropTypes from "prop-types";

export default function List({ children, className, style }) {
	let prefix, 
		classes = "pier-list__item";

	classes += ` ${className}`;

	return (
		<li className={classes} style={style}>
			<div className="pier-list__content">{children}</div>
		</li>
	);
}

List.defaultProps = {
	className: ""
};

List.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	style: PropTypes.object,
};
