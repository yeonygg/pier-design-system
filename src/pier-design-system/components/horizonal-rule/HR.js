import PropTypes from "prop-types";

export default function HR({ size, color, className, style }) {
	let classes = 'pier-hr';

	switch(size) {
		case 'lg':
			classes += ' pier-hr--lg'
			break
		case 'md':
			classes += ' pier-hr--md'
			break
		case 'sm':
			classes += ''
			break
	}

	switch(color) {
		case 'hero':
			classes += ' pier-hr--hero'
			break
		case 'light':
			classes += ''
			break
		case 'dark':
			classes += ' pier-hr--dark'
			break
		case 'gray':
			classes += ' pier-hr--gray'
			break
	}

	classes += ` ${className}`

	return (
		<hr className={classes} style={style} />
	)
}

HR.defaultProps = {
	size: "sm",
	color: "light",
	className: ""
}

HR.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
}

