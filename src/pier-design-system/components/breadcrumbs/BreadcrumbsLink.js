import PropTypes from "prop-types";

export default function Breadcrumbs({ children, disabled, className, style }) {
	let prefix = "pier-breadcrumbs",
		crumbClasses = prefix + "__crumb",
		linkClasses = prefix + "__link",
		arrowClasses = prefix + "__arrow";

	disabled && (linkClasses += ` ${prefix}__link--disabled`);

	className !== "" && (crumbClasses += ` ${className}`);

	return (
		<div className={crumbClasses} style={style}>
			<div className={linkClasses}>
				{children}
			</div>
			<i className={arrowClasses}></i>
		</div>
	);
}

Breadcrumbs.defaultProps = {
	disabled: false,
	className: ""
};

Breadcrumbs.propTypes = {
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object,
};
