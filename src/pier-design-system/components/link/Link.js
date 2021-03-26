import PropTypes from "prop-types";

export default function BodyText({ children, size, dark, disabled, className, style }) {
	let prefix = "pier-link",
		classes = prefix;

	switch(size) {
		case 'md':
			classes += ``
			break
		case 'sm':
			classes += ` ${prefix}--sm`
			break
		case 'xs':
			classes += ` ${prefix}--xs`
			break
	}

	dark && (classes += ` ${prefix}--dark`);

	disabled && (classes += ` ${prefix}--disabled`);

	className !== "" && (classes += ` ${className}`);

	return (
		<span className={classes} style={style}>
			{children}
		</span>
	)
}

BodyText.defaultProps = {
	size: "md",
	dark: false,
	disabled: false,
	className: ""
}

BodyText.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.string,
	dark: PropTypes.bool,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
}