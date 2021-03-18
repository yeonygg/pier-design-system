import Head from "next/head";
import PropTypes from "prop-types";
import { Fragment } from "react";
import parse from "html-react-parser";
import { Layout } from "src/pages/index";
import componentsData from "src/documentation/components/_componentsData";
import HR from "src/pier-design-system/components/horizonal-rule/HR";
import Heading from "src/pier-design-system/components/text/Heading";
import BodyText from "src/pier-design-system/components/text/BodyText";
import CodeBlock from "src/pier-design-system/components/text/CodeBlock";
import Section from "src/pier-design-system/components/containers/Section";
import Card from "src/pier-design-system/components/containers/Card";

export default function ComponentPage({ componentList, component }) {
	return (
		<div>
			<Head>
				<title>Colors | Pier Design System</title>
			</Head>
			<Layout componentList={componentList} />
			<HR></HR>

			<Section>
				<div style={{display: "inline-block"}}>
					<Heading style={{paddingRight: "4px"}}>{component.title}</Heading>
					<HR color="hero"/>
				</div>
				<BodyText size='xs' color='light-gray'>
					Last updated: {component["last-updated"]}
				</BodyText>
				<BodyText>{component.description}</BodyText>
			</Section>
			{component.components.map((item) => (
				<Fragment key={item.name}>
					<Section key={item.name}>
						<Heading size='sm'>{item.name}</Heading>
						<BodyText>{item.description}</BodyText>
						<Card>
							<Section>{parse(item.markup)}</Section>
						</Card>
						<Card>
							<Section>
								<CodeBlock size='xs'>{item.markup}</CodeBlock>
							</Section>
						</Card>
					</Section>
					{item.variations.map((variation) => (
						<Section key={variation.name}>
							<Heading size='sm'>{variation.name}</Heading>
							<BodyText>{variation.description}</BodyText>
							<Card>
								<Section>{parse(variation.markup)}</Section>
							</Card>
							<Card>
								<Section>
									<CodeBlock size='xs'>{variation.markup}</CodeBlock>
								</Section>
							</Card>
						</Section>
					))}
				</Fragment>
			))}
		</div>
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
