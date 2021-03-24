import { Fragment } from "react";
import List from "src/pier-design-system/components/list/List";
import ListItem from "src/pier-design-system/components/list/ListItem";

export default function TestPage() {
	return (
		<Fragment>
			<List size='sm'>
				<ListItem>
					List Item
					<List ordered size='sm'>
						<ListItem>List Item</ListItem>
						<ListItem>List Item</ListItem>
						<ListItem>List Item</ListItem>
					</List>
				</ListItem>
				<ListItem>List Item</ListItem>
				<ListItem>List Item</ListItem>
			</List>
			<List ordered size='sm'>
				<ListItem>List Item</ListItem>
				<ListItem>List Item</ListItem>
				<ListItem>List Item</ListItem>
			</List>
			<List size='md'>
				<ListItem>List Item</ListItem>
				<ListItem>List Item</ListItem>
				<ListItem>List Item</ListItem>
			</List>
			<List ordered size='md'>
				<ListItem>List Item</ListItem>
				<ListItem>List Item</ListItem>
				<ListItem>List Item</ListItem>
			</List>
			<List>
				<ListItem>List Item</ListItem>
				<ListItem>List Item</ListItem>
				<ListItem>List Item</ListItem>
			</List>
			<List ordered>
				<ListItem>List Item</ListItem>
				<ListItem>List Item</ListItem>
				<ListItem>List Item</ListItem>
			</List>
		</Fragment>
	);
}
