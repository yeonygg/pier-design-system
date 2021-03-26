import { Fragment } from "react";
import Breadcrumbs from "src/pier-design-system/components/breadcrumbs/Breadcrumbs";
import BreadcrumbsLink from "src/pier-design-system/components/breadcrumbs/BreadcrumbsLink";
import Link from "next/link";

export default function TestPage() {
	return (
		<Fragment>
			<Breadcrumbs maxCrumbs={2}>
				<BreadcrumbsLink>
					<Link href="/">
						<a>Home</a>
					</Link>
				</BreadcrumbsLink>
				<BreadcrumbsLink>First Page</BreadcrumbsLink>
				<BreadcrumbsLink disabled>Second Page</BreadcrumbsLink>
				<BreadcrumbsLink>Third Page</BreadcrumbsLink>
				<BreadcrumbsLink>Last Page</BreadcrumbsLink>
			</Breadcrumbs>
		</Fragment>
	);
}
