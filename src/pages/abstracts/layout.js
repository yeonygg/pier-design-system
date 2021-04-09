import Head from "next/head";
import PropTypes from "prop-types";
import { Layout } from "../index";
import { Fragment } from "react";
import NextLink from "next/link";
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

export default function LayoutPage({ appData }) {
	return (
		<Fragment>
			<Head>
				<title>Layout | Pier Design System</title>
			</Head>
			<Layout appData={appData}>
				<Section>
					<Breadcrumbs style={{ marginBottom: "16px" }}>
						<BreadcrumbsLink>
							<NextLink href='/'>
								<a>Home</a>
							</NextLink>
						</BreadcrumbsLink>
						<BreadcrumbsLink disabled>Abstracts</BreadcrumbsLink>
						<BreadcrumbsLink disabled>Layout</BreadcrumbsLink>
					</Breadcrumbs>
					<div style={{ display: "inline-block" }}>
						<Heading style={{ paddingRight: "4px" }}>Layout</Heading>
						<HR color='hero' />
					</div>
					<BodyText size='xs' color='light-gray'>
						Last updated: 4/1/21
					</BodyText>
					<BodyText>Layout Description</BodyText>
				</Section>
				<Section>
					<Heading size='sm'>Equal Widths Row</Heading>
					<BodyText>Equal Widths Row</BodyText>
					<Card>
						<Section>
						</Section>
					</Card>
					<Well>
						<Section>
							<CodeBlock size='xs'></CodeBlock>
						</Section>
					</Well>
				</Section>
			</Layout>
		</Fragment>
	);
}

LayoutPage.propTypes = {
	appData: PropTypes.object,
};

export async function getStaticProps() {
	return {
		props: {
			appData: API,
		},
	};
}
