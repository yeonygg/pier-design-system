import jsxToString from 'jsx-to-string';
import { List, ListItem } from 'dist';

export const reactDemo = jsxToString(
    <List>
        <ListItem>List Item</ListItem>
        <ListItem>List Item</ListItem>
        <ListItem>List Item</ListItem>
    </List>
);
