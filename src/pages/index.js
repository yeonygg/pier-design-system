import Head from "next/head";
import PropTypes from "prop-types";
import Nav from "../pier-design-system/components/navigation/Nav";
import NavItem from "../pier-design-system/components/navigation/NavItem";
import NavSubItem from "../pier-design-system/components/navigation/NavSubItem";
import componentsData from "../documentation/components/_componentsData";
import { Fragment } from "react";
import Heading from "src/pier-design-system/components/text/Heading";
import Link from "next/link";

export default function Home({ componentList }) {
	return (
		<Fragment>
			<Head>
				<title>Pier Design System</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout componentList={componentList}></Layout>
		</Fragment>
	);
}

Home.propTypes = {
	componentList: PropTypes.array,
};

export function Layout({ children, componentList }) {
	return (
		<Fragment>
			<div style={{ position: "fixed", height: "100vh", zIndex: 99 }}>
				<Nav>
					<Link href='/'>
						<a>
							<Heading size='sm' style={{ margin: "24px" }}>
								Pier Design System
							</Heading>
						</a>
					</Link>
					<NavItem label='Abstracts' icon='far fa-atom'>
						<NavSubItem label='Fonts' link='/abstracts/fonts' />
						<NavSubItem label='Icons' link='/abstracts/icons' />
						<NavSubItem label='Colors' link='/abstracts/colors' />
					</NavItem>
					<NavItem label='Components' icon='fas fa-cubes'>
						{componentList.map((component) => {
							return <NavSubItem key={component.slug} label={component.title} link={"/components/" + component.slug} />;
						})}
					</NavItem>
				</Nav>
			</div>
			<div style={{ maxWidth: "1040px", margin: "0 auto", width: "100%", paddingLeft: "240px" }}>{children}</div>
		</Fragment>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	componentList: PropTypes.array,
};

export async function getStaticProps() {
	return {
		props: {
			componentList: componentsData,
		},
	};
}
