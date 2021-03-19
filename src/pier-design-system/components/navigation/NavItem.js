import PropTypes from "prop-types";
import Link from "next/link";
import { Fragment } from "react";

export default function NavItem({ children, label, link, icon }) {
	return (
		<Fragment>
			<div className='pier-nav__item'>
				<Link href={link}>
					<a>
						{icon && <i className={icon} style={{marginRight: "12px"}}></i>}
						{label}
					</a>
				</Link>
				{children && <i className='far fa-chevron-right pier-nav__item-dropdown-toggle'></i>}
			</div>

			{children && <div className='pier-nav__item-dropdown'>{children}</div>}
		</Fragment>
	);
}

NavItem.defaultProps = {
	label: "Nav Item",
	link: "/",
};

NavItem.propTypes = {
	children: PropTypes.node,
	label: PropTypes.string,
	link: PropTypes.string,
	icon: PropTypes.string,
};
