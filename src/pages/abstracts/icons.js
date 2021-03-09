import Head from "next/head";
import PropTypes from "prop-types";
import { Layout } from "../index";
import components from "../../pier-design-system/components/data";

export default function iconsPage({ componentList }) {
	return (
		<div>
			<Head>
				<title>Icons | Pier Design System</title>
			</Head>
			<Layout componentList={componentList}/>
			<hr></hr>
			<h1>icons</h1>
		</div>
	);
}

iconsPage.propTypes = {
	componentList: PropTypes.array,
};

export async function getStaticProps() {
	return {
		props: {
			componentList: components,
		},
	};
}