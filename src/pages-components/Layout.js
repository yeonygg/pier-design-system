import PropTypes from 'prop-types';
import { Fragment } from 'react';
import useMediaQuery from 'src/pages-hooks/useMediaQuery';
import Heading from 'src/pier-design-system/components/text/Heading';
import NextLink from 'next/link';
import Nav from 'src/pier-design-system/components/navigation/Nav';
import NavItemContainer from 'src/pier-design-system/components/navigation/NavItemContainer';
import NavItem from 'src/pier-design-system/components/navigation/NavItem';
import NavItemDropdown from 'src/pier-design-system/components/navigation/NavItemDropdown';
import NavSubItem from 'src/pier-design-system/components/navigation/NavSubItem';
import NavItemGroup from 'src/pier-design-system/components/navigation/NavItemGroup';
import Screen from 'src/pier-design-system/components/containers/Screen';
import IconButton from 'src/pier-design-system/components/buttons/IconButton';

export default function Layout({ children, appData }) {
    let isDesktop = useMediaQuery('(min-width: 768px)');
    return (
        <Fragment>
            <Screen>
                {isDesktop ? (
                    <Nav>
                        <NextLink href="/">
                            <a>
                                <Heading size="sm" className="-m-b-0 -p-a-7">
                                    Pier Design System
                                </Heading>
                            </a>
                        </NextLink>
                        <NavItemGroup>
                            <NavItemContainer>
                                <NavItem icon="fas fa-atom">Abstracts</NavItem>
                                <NavItemDropdown>
                                    <NextLink href="/abstracts/grid">
                                        <a>
                                            <NavSubItem>Grid</NavSubItem>
                                        </a>
                                    </NextLink>
                                </NavItemDropdown>
                            </NavItemContainer>
                            <NavItemContainer>
                                <NavItem icon="fas fa-cubes">Components</NavItem>
                                <NavItemDropdown>
                                    {appData.components.map((component) => {
                                        return (
                                            <NextLink key={component.slug} href={'/components/' + component.slug}>
                                                <a>
                                                    <NavSubItem>{component.title}</NavSubItem>
                                                </a>
                                            </NextLink>
                                        );
                                    })}
                                </NavItemDropdown>
                            </NavItemContainer>
                            <NavItemContainer>
                                <NavItem icon="fas fa-tools">Utilities</NavItem>
                                <NavItemDropdown>
                                    {appData.utilities.map((utility) => {
                                        return (
                                            <NextLink key={utility.slug} href={'/utilities/' + utility.slug}>
                                                <a>
                                                    <NavSubItem>{utility.title}</NavSubItem>
                                                </a>
                                            </NextLink>
                                        );
                                    })}
                                </NavItemDropdown>
                            </NavItemContainer>
                        </NavItemGroup>
                    </Nav>
                ) : (
                    <Nav mobile>
                        <NextLink href="/">
                            <a>
                                <Heading size="sm" className="-m-a-4">
                                    Pier Design System
                                </Heading>
                            </a>
                        </NextLink>
                        <IconButton icon="far fa-bars" className="-m-a-4"></IconButton>
                    </Nav>
                )}
            </Screen>
            <div
                style={
                    isDesktop
                        ? {
                              maxWidth: '1040px',
                              margin: '0 auto',
                              width: '100%',
                              paddingLeft: '240px',
                          }
                        : {
                              maxWidth: '1040px',
                              margin: '0 auto',
                              width: '100%',
                              paddingTop: '72px',
                          }
                }
            >
                {children}
            </div>
        </Fragment>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    appData: PropTypes.object,
};
