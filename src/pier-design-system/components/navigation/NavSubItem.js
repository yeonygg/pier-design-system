import PropTypes from "prop-types";
import Link from "next/link";

export default function NavSubItem({ label, link }) {
	return (
		<Link href={link}>
			<a>
				<div className='pier-nav__sub-item'>
					<div className='pier-nav__sub-item-line'></div>
					{label}
				</div>
			</a>
		</Link>
	);
}

NavSubItem.defaultProps = {
	label: "Sub Nav Item",
	link: "/",
};

NavSubItem.propTypes = {
	label: PropTypes.string,
	link: PropTypes.string,
};
