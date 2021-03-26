import Head from "next/head";
import PropTypes from "prop-types";
import componentsData from "../documentation/components/_componentsData";
import { Fragment } from "react";
import Heading from "src/pier-design-system/components/text/Heading";
import NextLink from "next/link";
import Nav from "src/pier-design-system/components/navigation/Nav";
import NavItemContainer from "src/pier-design-system/components/navigation/NavItemContainer";
import NavItem from "src/pier-design-system/components/navigation/NavItem";
import NavItemDropdown from "src/pier-design-system/components/navigation/NavItemDropdown";
import NavSubItem from "src/pier-design-system/components/navigation/NavSubItem";
import NavSubLabel from "src/pier-design-system/components/navigation/NavSubLabel";

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
					<NextLink href='/'>
						<a>
							<Heading size='sm' style={{ padding: "24px" }}>
								Pier Design System
							</Heading>
						</a>
					</NextLink>
					<NavItemContainer startToggled>
						<NavItem icon="far fa-atom">Abstracts</NavItem>
						<NavItemDropdown>
							<NextLink href='/abstracts/fonts'>
								<a>
									<NavSubItem>Fonts</NavSubItem>
								</a>
							</NextLink>
							<NextLink href='/abstracts/icons'>
								<a>
									<NavSubItem>Icons</NavSubItem>
								</a>
							</NextLink>
							<NextLink href='/abstracts/colors'>
								<a>
									<NavSubItem>Colors</NavSubItem>
								</a>
							</NextLink>
						</NavItemDropdown>
					</NavItemContainer>
					<NavItemContainer startToggled>
						<NavItem icon="fas fa-cubes">Components</NavItem>
						<NavItemDropdown>
							{componentList.map((component) => {
								return (
									<NextLink key={component.slug} href={"/components/" + component.slug}>
										<a>
											<NavSubItem>{component.title}</NavSubItem>
										</a>
									</NextLink>
								);
							})}
						</NavItemDropdown>
					</NavItemContainer>
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
