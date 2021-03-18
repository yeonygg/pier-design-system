import PropTypes from "prop-types";

export default function Heading({ children, size, dark, className, style }) {
	let classes = 'pier-heading'

	switch(size) {
		case 'lg':
			classes += ' pier-heading--lg'
			break
		case 'md':
			classes += ''
			break
		case 'sm':
			classes += ' pier-heading--sm'
			break
		case 'xs':
			classes += ' pier-heading--xs'
			break
	}

	dark && (classes += ' pier-heading--dark')

	classes += ` ${className}`

	switch(size) {
		case 'lg':
			return (<h1 className={classes} style={style}>{children}</h1>)
		case 'md':
			return (<h2 className={classes} style={style}>{children}</h2>)
		case 'sm':
			return (<h3 className={classes} style={style}>{children}</h3>)
		case 'xs':
			return (<h4 className={classes} style={style}>{children}</h4>)
	}
}

Heading.defaultProps = {
	size: "md",
	dark: false,
	className: ""
}

Heading.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.string,
	dark: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
}

