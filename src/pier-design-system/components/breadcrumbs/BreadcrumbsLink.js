import PropTypes from "prop-types";

export default function Breadcrumbs({ children, disabled, className, style }) {
	let prefix = "pier-breadcrumbs",
		crumbClasses = prefix + "__crumb",
		linkClasses = "pier-link -font-s-i";

	disabled && (linkClasses += ` pier-link--disabled`);

	className !== "" && (crumbClasses += ` ${className}`);

	return (
		<div className={crumbClasses} style={style}>
			<span className={linkClasses}>
				{children}
			</span>
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
