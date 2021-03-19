import Head from "next/head";
import PropTypes from "prop-types";
import { Layout } from "../index";
import componentsData from "../../documentation/components/_componentsData";

export default function iconsPage({ componentList }) {
	return (
		<div>
			<Head>
				<title>Icons | Pier Design System</title>
			</Head>
			<Layout componentList={componentList}>
			<h1>icons</h1>
			</Layout>
		</div>
	);
}

iconsPage.propTypes = {
	componentList: PropTypes.array,
};

export async function getStaticProps() {
	return {
		props: {
			componentList: componentsData,
		},
	};
}