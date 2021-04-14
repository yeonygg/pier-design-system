import Head from "next/head";
import PropTypes from "prop-types";
import Layout from "src/pages-components/Layout";
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
					<BodyText>
						Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class. For example, here are two grid
						layouts that apply to every device and viewport, from <code className="pier-body-text__inline-code">xs</code> to <code className="pier-body-text__inline-code">xl</code>. Add any number of unit-less classes for each
						breakpoint you need and every column will be the same width.
					</BodyText>
					<Card>
						<Section>
							<div className='pier-container'>
								<div className='pier-row'>
									<div className='pier-column -p-a-2 -bd-1-gray -bd-r-0 -bd-b-0'>1 of 2</div>
									<div className='pier-column -p-a-2 -bd-1-gray -bd-b-0'>2 of 2</div>
								</div>
								<div className='pier-row'>
									<div className='pier-column -p-a-2 -bd-1-gray -bd-r-0'>1 of 3</div>
									<div className='pier-column -p-a-2 -bd-1-gray -bd-r-0'>2 of 3</div>
									<div className='pier-column -p-a-2 -bd-1-gray'>3 of 3</div>
								</div>
							</div>
						</Section>
					</Card>
					<Well>
						<Section>
							<CodeBlock size='xs'>
								{`<div class='pier-container'>
	<div class='pier-row'>
		<div class='pier-column'>1 of 2</div>
		<div class='pier-column'>2 of 2</div>
	</div>
	<div class='pier-row'>
		<div class='pier-column'>1 of 3</div>
		<div class='pier-column'>2 of 3</div>
		<div class='pier-column'>3 of 3</div>
	</div>
</div>`}
							</CodeBlock>
						</Section>
					</Well>
				</Section>
				<Section>
					<Heading size='sm'>Setting One Column Width</Heading>
					<BodyText>
						Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize
						around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize
						no matter the width of the center column.
					</BodyText>
					<Card>
						<Section>
							<div className='pier-container'>
								<div className='pier-row -p-a-2'>
									<div className='pier-column -p-a-2 -bd-1-gray'>1 of 3</div>
									<div className='pier-column pier-column--6 -p-a-2 -bd-1-gray'>2 of 3 (wider)</div>
									<div className='pier-column -p-a-2 -bd-1-gray'>3 of 3</div>
								</div>
								<div className='pier-row -p-a-2'>
									<div className='pier-column -p-a-2 -bd-1-gray'>1 of 3</div>
									<div className='pier-column pier-column--5 -p-a-2 -bd-1-gray'>2 of 3 (wider)</div>
									<div className='pier-column -p-a-2 -bd-1-gray'>3 of 3</div>
								</div>
							</div>
						</Section>
					</Card>
					<Well>
						<Section>
							<CodeBlock size='xs'>
								{`<div class='pier-container'>
	<div class='pier-row'>
		<div class='pier-column -bd-1-gray'>1 of 3</div>
		<div class='pier-column pier-column--6 -bd-1-gray'>2 of 3 (wider)</div>
		<div class='pier-column -bd-1-gray'>3 of 3</div>
	</div>
	<div class='pier-row'>
		<div class='pier-column -bd-1-gray'>1 of 3</div>
		<div class='pier-column pier-column--5 -bd-1-gray'>2 of 3 (wider)</div>
		<div class='pier-column -bd-1-gray'>3 of 3</div>
	</div
</div>`}
							</CodeBlock>
						</Section>
					</Well>
				</Section>
				<Section>
					<Heading size='sm'>Variable Width Content</Heading>
					<BodyText>
						Use <code className="pier-body-text__inline-code">{`col-{breakpoint}-auto`}</code> classes to size columns based on the natural width of their content.
					</BodyText>
					<Card>
						<Section>
							<div className='pier-container'>
								<div className='pier-row'>
									<div className='pier-column pier-column--lg-2 -bd-1-gray'>1 of 3</div>
									<div className='pier-column pier-column--md-auto -bd-1-gray'>Variable width content</div>
									<div className='pier-column pier-column--lg-2 -bd-1-gray'>3 of 3</div>
								</div>
								<div className='pier-row'>
									<div className='pier-column -bd-1-gray'>1 of 3</div>
									<div className='pier-column pier-column--md-auto -bd-1-gray'>Variable width content</div>
									<div className='pier-column pier-column--lg-2 -bd-1-gray'>3 of 3</div>
								</div>
							</div>
						</Section>
					</Card>
					<Well>
						<Section>
							<CodeBlock size='xs'>
								{`<div class='pier-container'>
	<div class='pier-row'>
		<div class='pier-column pier-column--lg-2'>1 of 3</div>
		<div class='pier-column pier-column--md-auto'>Variable width content</div>
		<div class='pier-column pier-column--lg-2'>3 of 3</div>
	</div>
	<div class='pier-row'>
		<div class='pier-column'>1 of 3</div>
		<div class='pier-column pier-column--md-auto'>Variable width content</div>
		<div class='pier-column pier-column--lg-2'>3 of 3</div>
	</div>
</div>`}
							</CodeBlock>
						</Section>
					</Well>
				</Section>
				<Section>
					<Heading size='sm'>Equal-width multi-row</Heading>
					<BodyText>
						Create equal-width columns that span multiple rows by inserting a <code className="pier-body-text__inline-code">.-w-100</code> where you want the columns to break to a new line.
						Make the breaks responsive by mixing the <code className="pier-body-text__inline-code">.-w-100</code> with some responsive display utilities.
					</BodyText>
					<Card>
						<Section>
							<div className='pier-row'>
								<div className='pier-column -bd-1-gray'>col</div>
								<div className='pier-column -bd-1-gray'>col</div>
								<div className='-w-100'></div>
								<div className='pier-column -bd-1-gray'>col</div>
								<div className='pier-column -bd-1-gray'>col</div>
							</div>
						</Section>
					</Card>
					<Well>
						<Section>
							<CodeBlock size='xs'>
								{`<div class='pier-row'>
	<div class='pier-column'>col</div>
	<div class='pier-column'>col</div>
	<div class='-w-100'></div>
	<div class='pier-column'>col</div>
	<div class='pier-column'>col</div>
</div>`}
							</CodeBlock>
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
