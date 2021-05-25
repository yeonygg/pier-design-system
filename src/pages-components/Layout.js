import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
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
import BubbleMenu from 'src/pier-design-system/components/bubble-menu/BubbleMenu';
import BubbleMenuItem from 'src/pier-design-system/components/bubble-menu/BubbleMenuItem';

export default function Layout({ children, appData }) {
    const [mobileNav, setMobileNav] = useState(false);
    let isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <Fragment>
            <Screen>
                {!isDesktop ? (
                    <Nav mobile>
                        <NextLink href="/">
                            <a>
                                <Heading size="sm" className="-m-a-4">
                                    Pier Design System
                                </Heading>
                            </a>
                        </NextLink>
                        <div>
                            <IconButton
                                icon="far fa-bars"
                                className="-m-a-4"
                                onClick={() => {
                                    setMobileNav(!mobileNav);
                                }}
                            ></IconButton>
                            <BubbleMenu open={mobileNav} className="-m-r-2">
                                <NextLink href="/abstracts">
                                    <a>
                                        <BubbleMenuItem>Abstracts</BubbleMenuItem>
                                    </a>
                                </NextLink>
                                <NextLink href="/components">
                                    <a>
                                        <BubbleMenuItem>Components</BubbleMenuItem>
                                    </a>
                                </NextLink>
                                <NextLink href="/utilities">
                                    <a>
                                        <BubbleMenuItem>Utilities</BubbleMenuItem>
                                    </a>
                                </NextLink>
                            </BubbleMenu>
                        </div>
                    </Nav>
                ) : (
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
                                <NextLink href="/abstracts">
                                    <a>
                                        <NavItem icon="fas fa-atom">Abstracts</NavItem>
                                    </a>
                                </NextLink>
                                <NavItemDropdown>
                                    <NextLink href="/abstracts/grid">
                                        <a>
                                            <NavSubItem>Grid</NavSubItem>
                                        </a>
                                    </NextLink>
                                </NavItemDropdown>
                            </NavItemContainer>
                            <NavItemContainer>
                                <NextLink href="/components">
                                    <a>
                                        <NavItem icon="fas fa-cubes">Components</NavItem>
                                    </a>
                                </NextLink>
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
                                <NextLink href="/utilities">
                                    <a>
                                        <NavItem icon="fas fa-tools">Utilities</NavItem>
                                    </a>
                                </NextLink>
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
