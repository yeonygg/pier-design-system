import Head from "next/head";
import PropTypes from "prop-types";
import { Layout } from "../index";
import components from "../../pier-design-system/components/data";

export default function fontsPage({ componentList }) {
	return (
		<div>
			<Head>
				<title>Fonts | Pier Design System</title>
			</Head>
			<Layout componentList={componentList}/>
			<hr></hr>
			<h1>fonts</h1>
		</div>
	);
}

fontsPage.propTypes = {
	componentList: PropTypes.array,
};

export async function getStaticProps() {
	return {
		props: {
			componentList: components,
		},
	};
}