import PropTypes from "prop-types";
import NextLink from "next/link";
import Heading from "src/pier-design-system/components/text/Heading";
import BodyText from "src/pier-design-system/components/text/BodyText";
import Section from "src/pier-design-system/components/containers/Section";
import Breadcrumbs from "src/pier-design-system/components/breadcrumbs/Breadcrumbs";
import BreadcrumbsLink from "src/pier-design-system/components/breadcrumbs/BreadcrumbsLink";
import HR from "src/pier-design-system/components/horizonal-rule/HR";

export default function PageHeading({ pageData, breadcrumbs }) {
	return (
		<Section>
			<Breadcrumbs style={{ marginBottom: "16px" }}>
				{breadcrumbs.map((item, i) => (
					<BreadcrumbsLink key={i} disabled={item.disabled}>
						{!item.disabled ? (
							<NextLink href={item.link}>
								<a>{item.label}</a>
							</NextLink>
						) : (
							<a>{item.label}</a>
						)}
					</BreadcrumbsLink>
				))}
			</Breadcrumbs>
			<div style={{ display: "inline-block" }}>
				<Heading style={{ paddingRight: "4px" }}>{pageData.title}</Heading>
				<HR color='hero' />
			</div>
			<BodyText size='xs' color='light-gray'>
				Last updated: {pageData["last-updated"]}
			</BodyText>
			<BodyText>{pageData.description}</BodyText>
		</Section>
	);
}

PageHeading.propTypes = {
	pageData: PropTypes.object.isRequired,
	breadcrumbs: PropTypes.array.isRequired,
};
