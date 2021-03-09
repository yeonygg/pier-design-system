import PropTypes from "prop-types";
import Link from "next/link";

export default function NavItem({ children, label, link, icon }) {
	return (
		<div>
			<div>
				<Link href={link}>
					<a>
						{icon && <i className={icon}></i>}
						{label}
					</a>
				</Link>
				{children && <i className='far fa-chevron-right'></i>}
			</div>
			{children && <div>{children}</div>}
		</div>
	);
}

NavItem.defaultProps = {
	label: "Nav Item",
	link: "/"
};

NavItem.propTypes = {
	children: PropTypes.node,
	label: PropTypes.string,
	link: PropTypes.string,
	icon: PropTypes.string,
};
