import Head from "next/head";
import PropTypes from "prop-types";
import Nav from "../pier-design-system/components/navigation/Nav";
import NavItem from "../pier-design-system/components/navigation/NavItem";
import NavSubItem from "../pier-design-system/components/navigation/NavSubItem";
import components from "../pier-design-system/components/data";

export default function Home({ componentList }) {
	return (
		<div>
			<Head>
				<title>Pier Design System</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout componentList={componentList}/>
		</div>
	);
}

Home.propTypes = {
	componentList: PropTypes.array,
};

export function Layout({ componentList }) {
	return (
		<Nav>
			<NavItem label='Abstracts'>
				<NavSubItem label='Fonts' link='/abstracts/fonts' />
				<NavSubItem label='Icons' link='/abstracts/icons' />
				<NavSubItem label='Colors' link='/abstracts/colors' />
			</NavItem>
			<NavItem label='Components'>
			{componentList.map((component) => {
					return <NavSubItem key={component.slug} label={component.title} link={"/components/" + component.slug} />;
				})}
			</NavItem>
		</Nav>
	);
}

Layout.propTypes = {
	componentList: PropTypes.array,
};

export async function getStaticProps() {
	return {
		props: {
			componentList: components,
		},
	};
}
