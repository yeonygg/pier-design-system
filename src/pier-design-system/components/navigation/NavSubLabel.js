import PropTypes from "prop-types";

export default function NavSubItem({ label }) {
	return (
		<div className="pier-nav__sub-label">
			<p>{label}</p>
		</div>
	);
}

NavSubItem.defaultProps = {
	label: "Sub Nav Label",
};

NavSubItem.propTypes = {
	label: PropTypes.string
};
