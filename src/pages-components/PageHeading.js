import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Heading from 'src/pier-design-system/components/text/Heading';
import BodyText from 'src/pier-design-system/components/text/BodyText';
import Section from 'src/pier-design-system/components/containers/Section';
import Breadcrumbs from 'src/pier-design-system/components/breadcrumbs/Breadcrumbs';
import BreadcrumbsLink from 'src/pier-design-system/components/breadcrumbs/BreadcrumbsLink';
import Link from 'src/pier-design-system/components/text/Link';
import HR from 'src/pier-design-system/components/horizonal-rule/HR';
import { Fragment } from 'react';

export default function PageHeading({ breadcrumbs, title, lastUpdated, description }) {
    return (
        <Section className="-p-b-0">
            <Breadcrumbs style={{ marginBottom: '16px' }}>
                {breadcrumbs.map((item, i) => (
                    <BreadcrumbsLink key={i} disabled={item.disabled}>
                        {!item.disabled ? (
                            <NextLink href={item.link}>
                                <a>{item.label}</a>
                            </NextLink>
                        ) : (
                            <Fragment>{item.label}</Fragment>
                        )}
                    </BreadcrumbsLink>
                ))}
            </Breadcrumbs>
            <div style={{ display: 'inline-block' }}>
                <Heading style={{ paddingRight: '4px' }} className="-m-b-1">
                    {title}
                </Heading>
                <HR theme="hero" size="lg" />
            </div>
            {lastUpdated && (
                <BodyText size="xs" color="light">
                    Last updated: {lastUpdated}
                </BodyText>
            )}
            {description && <BodyText>{description}</BodyText>}
        </Section>
    );
}

PageHeading.propTypes = {
    breadcrumbs: PropTypes.array.isRequired,
    title: PropTypes.string,
    lastUpdated: PropTypes.string,
    description: PropTypes.string,
};
