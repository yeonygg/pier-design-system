import Head from "next/head";
import PropTypes from "prop-types";
import Layout from "src/pages-components/Layout";
import componentsData from "../../documentation/components/_componentsData";
import { Fragment } from "react";

export default function colorsPage({ componentList }) {
	return (
		<Fragment>
			<Head>
				<title>Colors | Pier Design System</title>
			</Head>
			<Layout componentList={componentList}>
			<h1>colors</h1>
			</Layout>
		</Fragment>
	);
}

colorsPage.propTypes = {
	componentList: PropTypes.array,
};

export async function getStaticProps() {
	return {
		props: {
			componentList: componentsData,
		},
	};
}