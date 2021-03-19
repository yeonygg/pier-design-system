import Head from "next/head";
import PropTypes from "prop-types";
import { Layout } from "../index";
import componentsData from "../../documentation/components/_componentsData";

export default function fontsPage({ componentList }) {
	return (
		<div>
			<Head>
				<title>Fonts | Pier Design System</title>
			</Head>
			<Layout componentList={componentList}>
			<h1>fonts</h1>
			</Layout>
		</div>
	);
}

fontsPage.propTypes = {
	componentList: PropTypes.array,
};

export async function getStaticProps() {
	return {
		props: {
			componentList: componentsData,
		},
	};
}