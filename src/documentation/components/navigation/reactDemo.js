import jsxToString from 'jsx-to-string';
import { Nav, NavItem, NavItemContainer, NavItemDropdown, NavItemGroup, NavSubItem, NavSubLabel, Heading } from 'dist';

export const reactDemo = jsxToString(
    <Nav isCollapsible>
        <NavItemGroup></NavItemGroup>
        <Heading size="sm" className="-m-l-6">
            Navigation
        </Heading>
        <NavItemGroup>
            <NavItemContainer>
                <NavItem icon="fas fa-file">item with dropdown</NavItem>
                <NavItemDropdown>
                    <NavSubLabel>sub-label</NavSubLabel>
                    <NavSubItem>sub-item</NavSubItem>
                    <NavSubItem>sub-item</NavSubItem>
                    <NavSubItem>sub-item</NavSubItem>
                </NavItemDropdown>
            </NavItemContainer>
            <NavItemContainer>
                <NavItem icon="fas fa-chart-area">item with dropdown</NavItem>
                <NavItemDropdown>
                    <NavSubLabel>sub-label</NavSubLabel>
                    <NavSubItem>sub-item</NavSubItem>
                    <NavSubItem>sub-item</NavSubItem>
                    <NavSubItem>sub-item</NavSubItem>
                </NavItemDropdown>
            </NavItemContainer>
            <NavItem icon="fas fa-bread-slice">item</NavItem>
        </NavItemGroup>
    </Nav>
);
