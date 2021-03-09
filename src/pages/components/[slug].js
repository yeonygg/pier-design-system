import Head from "next/head";
import PropTypes from "prop-types";
import { Layout } from "../index";
import components from "../../pier-design-system/components/data";

export default function ComponentPage({ componentList, component }) {
	return (
		<div>
			<Head>
				<title>Colors | Pier Design System</title>
			</Head>
			<Layout componentList={componentList}/>
			<hr></hr>
			<h1>{component.title}</h1>
			<h1>{component.lastUpdated}</h1>
			<h1>{component.description}</h1>
		</div>
	);
}

ComponentPage.propTypes = {
	componentList: PropTypes.array,
	component: PropTypes.object
}

export async function getStaticPaths() {
	const paths = components.map((component) => ({
		params: { slug: component.slug }
	}))

	return { paths, fallback: false}
}

export async function getStaticProps({ params }) {
	const result = components.filter((component) => component.slug === params.slug)
	return {
		props: {
			componentList: components,
			component: result[0]
		}
	}
}
