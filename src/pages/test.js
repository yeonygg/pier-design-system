import { Fragment } from "react";
import Button from "src/pier-design-system/components/button/Button";
import IconButton from "src/pier-design-system/components/button/IconButton";

export default function TestPage() {
	return (
		<Fragment>
			<Button type="primary" size="sm" dark>Hello</Button>
			<IconButton icon="" size="sm">1</IconButton>
		</Fragment>
	);
}
