import PropTypes from "prop-types";

export default function Label({ children, forInput, size, dark, className, style }) {
	let classes = 'pier-label';

	switch(size) {
		case 'md':
			classes.push('')
			break
		case 'sm':
			classes.push(' pier-label--sm')
			break
	}

	dark && classes.push(' pier-label--dark')

	classes.push(` ${className}`)

	return (
		<p htmlFor={forInput} className={classes} style={style}>
			{children}
		</p>
	)
}

Label.defaultProps = {
	size: "md",
	dark: false
}

Label.propTypes = {
	children: PropTypes.node.isRequired,
	forInput: PropTypes.string,
	size: PropTypes.string,
	dark: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
}

