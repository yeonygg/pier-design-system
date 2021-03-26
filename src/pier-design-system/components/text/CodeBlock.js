import PropTypes from "prop-types";

export default function CodeBlock({ children, size, dark, className, style }) {
	let classes = 'pier-codeblock';

	switch(size) {
		case 'md':
			classes += ''
			break
		case 'sm':
			classes += ' pier-codeblock--sm'
			break
		case 'xs':
			classes += ' pier-codeblock--xs'
			break
	}

	dark && (classes += ' pier-codeblock--dark')

	classes += ` ${className}`

	return (
		<code className={classes} style={style}>
			{children}
		</code>
	)
}

CodeBlock.defaultProps = {
	size: "md",
	dark: false,
	className: ""
}

CodeBlock.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.string,
	dark: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
}

