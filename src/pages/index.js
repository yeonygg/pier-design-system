import Head from "next/head";
import PropTypes from "prop-types";
import API from "src/documentation/API";
import { Fragment } from "react";
import Heading from "src/pier-design-system/components/text/Heading";
import NextLink from "next/link";
import Nav from "src/pier-design-system/components/navigation/Nav";
import NavItemContainer from "src/pier-design-system/components/navigation/NavItemContainer";
import NavItem from "src/pier-design-system/components/navigation/NavItem";
import NavItemDropdown from "src/pier-design-system/components/navigation/NavItemDropdown";
import NavSubItem from "src/pier-design-system/components/navigation/NavSubItem";
import NavSubLabel from "src/pier-design-system/components/navigation/NavSubLabel";

export default function Home({ appData }) {
	return (
		<Fragment>
			<Head>
				<title>Pier Design System</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout appData={appData}></Layout>
		</Fragment>
	);
}

Home.propTypes = {
	appData: PropTypes.object,
};

export function Layout({ children, appData }) {
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
							<NextLink href='/abstracts/layout'>
								<a>
									<NavSubItem>Layout</NavSubItem>
								</a>
							</NextLink>
						</NavItemDropdown>
					</NavItemContainer>
					<NavItemContainer startToggled>
						<NavItem icon="fas fa-cubes">Components</NavItem>
						<NavItemDropdown>
							{appData.components.map((component) => {
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
					<NavItemContainer>
						<NavItem icon="fas fa-cubes">Utilities</NavItem>
						<NavItemDropdown>
							{appData.utilities.map((utility) => {
								return (
									<NextLink key={utility.slug} href={"/utilities/" + utility.slug}>
										<a>
											<NavSubItem>{utility.title}</NavSubItem>
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
	appData: PropTypes.object,
};

export async function getStaticProps() {
	return {
		props: {
			appData: API
		},
	};
}
