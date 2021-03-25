import Head from "next/head";
import NextLink from "next/link";
import PropTypes from "prop-types";
import { Fragment } from "react";
import htmlReactParse from "html-react-parser";
import prettier from "prettier/standalone";
import parserHtml from "prettier/esm/parser-html";
import { Layout } from "src/pages/index";
import componentsData from "src/documentation/components/_componentsData";
import HR from "src/pier-design-system/components/horizonal-rule/HR";
import Heading from "src/pier-design-system/components/text/Heading";
import BodyText from "src/pier-design-system/components/text/BodyText";
import CodeBlock from "src/pier-design-system/components/text/CodeBlock";
import Section from "src/pier-design-system/components/containers/Section";
import Card from "src/pier-design-system/components/containers/Card";
import Well from "src/pier-design-system/components/containers/Well";
import Breadcrumbs from "src/pier-design-system/components/breadcrumbs/Breadcrumbs";
import BreadcrumbsLink from "src/pier-design-system/components/breadcrumbs/BreadcrumbsLink";

export default function ComponentPage({ componentList, component }) {
	return (
		<Fragment>
			<Head>
				<title>{component.title} | Pier Design System</title>
			</Head>
			<Layout componentList={componentList}>
				<Section>
					<Breadcrumbs style={{ marginBottom: "16px" }}>
						<BreadcrumbsLink>
							<NextLink href='/'>
								<a>Home</a>
							</NextLink>
						</BreadcrumbsLink>
						<BreadcrumbsLink disabled>Components</BreadcrumbsLink>
						<BreadcrumbsLink disabled>{component.title}</BreadcrumbsLink>
					</Breadcrumbs>
					<div style={{ display: "inline-block" }}>
						<Heading style={{ paddingRight: "4px" }}>{component.title}</Heading>
						<HR color='hero' />
					</div>
					<BodyText size='xs' color='light-gray'>
						Last updated: {component["last-updated"]}
					</BodyText>
					<BodyText>{component.description}</BodyText>
				</Section>
				{component.variations.map((variation) => (
					<Section key={variation.name}>
						<Heading size='sm'>{variation.name}</Heading>
						<BodyText>{variation.description}</BodyText>
						<Card dark={variation.dark}>
							<Section>{htmlReactParse(variation.markup)}</Section>
						</Card>
						<Well>
							<Section>
								<CodeBlock size='xs'>
									{prettier.format(variation.markup, {parser: "html", plugins: [parserHtml], tabWidth: 4})}
								</CodeBlock>
							</Section>
						</Well>
					</Section>
				))}
			</Layout>
		</Fragment>
	);
}

ComponentPage.propTypes = {
	componentList: PropTypes.array,
	component: PropTypes.object,
};

export async function getStaticPaths() {
	const paths = componentsData.map((component) => ({
		params: { slug: component.slug },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const result = componentsData.filter((component) => component.slug === params.slug);
	return {
		props: {
			componentList: componentsData,
			component: result[0],
		},
	};
}
