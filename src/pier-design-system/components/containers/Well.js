import PropTypes from "prop-types";

export default function Well({ children, size, className, style }) {
	let classes = 'pier-well';

	switch(size) {
		case 'lg':
			classes += ''
			break
		case 'md':
			classes += ' pier-well--md'
			break
		case 'sm':
			classes += ' pier-well--sm'
			break
	}

	classes += ` ${className}`

	return (
		<div className={classes} style={style}>
			{children}
		</div>
	)
}

Well.defaultProps = {
	size: "lg",
	className: ""
}

Well.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
}