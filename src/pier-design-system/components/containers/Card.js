import PropTypes from "prop-types";

export default function Card({ children, size, dark, className, style }) {
	let classes = 'pier-card';

	switch(size) {
		case 'lg':
			classes += ''
			break
		case 'md':
			classes += ' pier-card--md'
			break
		case 'sm':
			classes += ' pier-card--sm'
			break
	}

	dark && (classes += ' pier-card--dark');

	classes += ` ${className}`

	return (
		<div className={classes} style={style}>
			{children}
		</div>
	)
}

Card.defaultProps = {
	size: "lg",
	className: "",
	dark: false
}

Card.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.string,
	dark: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
}