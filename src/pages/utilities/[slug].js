import Head from "next/head";
import NextLink from "next/link";
import PropTypes from "prop-types";
import { Fragment } from "react";
import htmlReactParse from "html-react-parser";
import prettier from "prettier/standalone";
import parserHtml from "prettier/esm/parser-html";
import Layout from "src/pages-components/Layout";
import API from "src/documentation/API";
import HR from "src/pier-design-system/components/horizonal-rule/HR";
import Heading from "src/pier-design-system/components/text/Heading";
import BodyText from "src/pier-design-system/components/text/BodyText";
import CodeBlock from "src/pier-design-system/components/text/CodeBlock";
import Section from "src/pier-design-system/components/containers/Section";
import Card from "src/pier-design-system/components/containers/Card";
import Well from "src/pier-design-system/components/containers/Well";
import Breadcrumbs from "src/pier-design-system/components/breadcrumbs/Breadcrumbs";
import BreadcrumbsLink from "src/pier-design-system/components/breadcrumbs/BreadcrumbsLink";
import PageHeading from "src/pages-components/PageHeading";

export default function ComponentPage({ appData, utility }) {
	const breadcrumbs = [
		{ label: "Home", link: "/", disabled: false },
		{ label: "Utilities", link: "", disabled: true },
		{ label: utility.title, link: "", disabled: true }
	];

	return (
		<Fragment>
			<Head>
				<title>{utility.title} | Pier Design System</title>
			</Head>
			<Layout appData={appData}>
				<PageHeading pageData={utility} breadcrumbs={breadcrumbs}></PageHeading>
			</Layout>
		</Fragment>
	);
}

ComponentPage.propTypes = {
	appData: PropTypes.object,
	utility: PropTypes.object,
};

export async function getStaticPaths() {
	const paths = API.utilities.map((utility) => ({
		params: { slug: utility.slug },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const result = API.utilities.filter((utility) => utility.slug === params.slug);
	return {
		props: {
			appData: API,
			utility: result[0],
		},
	};
}
