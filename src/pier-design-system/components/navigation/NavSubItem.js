import PropTypes from "prop-types";
import Link from "next/link";

export default function NavSubItem({ label, link }) {
	return (
		<div>
			<Link href={link}>
				<a>{label}</a>
			</Link>
		</div>
	);
}

NavSubItem.defaultProps = {
	label: "Sub Nav Item",
	link: "/"
};

NavSubItem.propTypes = {
	label: PropTypes.string,
	link: PropTypes.string,
};
