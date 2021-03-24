import PropTypes from "prop-types";
import { Fragment } from "react";

export default function List({ children, ordered, size, dark, className, style }) {
	let prefix = "pier-list",
		classes = prefix;

	ordered && (classes += ` ${prefix}--ordered`);

	switch (size) {
		case "lg":
			classes += ``;
			break;
		case "md":
			classes += ` ${prefix}--md`;
			break;
		case "sm":
			classes += ` ${prefix}--sm`;
			break;
	}

	dark && (classes += ` ${prefix}--dark`);

	className !== "" && (classes += ` ${className}`);

	return (
		<Fragment>
			{ordered ? (
				<ol className={classes} style={style}>
					{children}
				</ol>
			) : (
				<ul className={classes} style={style}>
					{children}
				</ul>
			)}
		</Fragment>
	);
}

List.defaultProps = {
	ordered: false,
	size: "lg",
	className: "",
	dark: false,
};

List.propTypes = {
	children: PropTypes.node.isRequired,
	ordered: PropTypes.bool,
	size: PropTypes.string,
	dark: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object,
};
