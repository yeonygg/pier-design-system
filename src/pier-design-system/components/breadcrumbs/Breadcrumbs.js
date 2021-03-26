import PropTypes from "prop-types";
import { Fragment } from "react";

export default function Breadcrumbs({ children, maxCrumbs, dark, className, style }) {
	let prefix = "pier-breadcrumbs",
		classes = prefix;
		
	maxCrumbs = Math.floor(maxCrumbs);

	dark && (classes += ` ${prefix}--dark`);

	className !== "" && (classes += ` ${className}`);

	const getLastCrumbs = () => {
		let lastCrumbs = [];
		for (let x = 0; x < children.length; x++) {
			if (x + maxCrumbs - 1 >= children.length) {
				lastCrumbs.push(children[x]);
			}
		}
		return lastCrumbs.map((item) => item);
	}

	return (
		<div className={classes} style={style}>
			{
				(isNaN(maxCrumbs) || maxCrumbs < 2 || maxCrumbs > children.length) ?
				children :
				<Fragment>
					{children[0]}
					<span className="pier-breadcrumbs__ellipsis" />
					{getLastCrumbs()}
				</Fragment>
			}
		</div>
	);
}

Breadcrumbs.defaultProps = {
	className: "",
	dark: false,
};

Breadcrumbs.propTypes = {
	children: PropTypes.node.isRequired,
	maxCrumbs: PropTypes.number,
	dark: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object,
};
