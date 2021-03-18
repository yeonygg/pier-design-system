import PropTypes from "prop-types";

export default function BodyText({ children, size, color, dark, className, style }) {
	let classes = 'pier-body-text';

	switch(size) {
		case 'md':
			classes += ''
			break
		case 'sm':
			classes += ' pier-body-text--sm'
			break
		case 'xs':
			classes += ' pier-body-text--xs'
			break
	}

	switch(color) {
		case 'default':
			classes += ''
			break
		case 'light-gray':
			classes += ' pier-body-text--light-gray'
			break
	}

	dark && (classes += ' pier-body-text--dark')

	classes += ` ${className}`

	return (
		<p className={classes} style={style}>
			{children}
		</p>
	)
}

BodyText.defaultProps = {
	size: "md",
	color: "default",
	dark: false,
	className: ""
}

BodyText.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.string,
	color: PropTypes.string,
	dark: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
}