import Head from "next/head";
import PropTypes from "prop-types";
import { Layout } from "../index";
import components from "../../pier-design-system/components/data";

export default function colorsPage({ componentList }) {
	return (
		<div>
			<Head>
				<title>Colors | Pier Design System</title>
			</Head>
			<Layout componentList={componentList}/>
			<hr></hr>
			<h1>colors</h1>
		</div>
	);
}

colorsPage.propTypes = {
	componentList: PropTypes.array,
};

export async function getStaticProps() {
	return {
		props: {
			componentList: components,
		},
	};
}