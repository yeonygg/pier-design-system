import Head from 'next/head';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import htmlReactParse from 'html-react-parser';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/esm/parser-html';
import Layout from 'src/pages-components/Layout';
import API from 'src/documentation/API';
import HR from 'src/pier-design-system/components/horizonal-rule/HR';
import Heading from 'src/pier-design-system/components/text/Heading';
import BodyText from 'src/pier-design-system/components/text/BodyText';
import CodeBlock from 'src/pier-design-system/components/text/CodeBlock';
import Section from 'src/pier-design-system/components/containers/Section';
import Card from 'src/pier-design-system/components/containers/Card';
import Well from 'src/pier-design-system/components/containers/Well';
import Breadcrumbs from 'src/pier-design-system/components/breadcrumbs/Breadcrumbs';
import BreadcrumbsLink from 'src/pier-design-system/components/breadcrumbs/BreadcrumbsLink';
import PageHeading from 'src/pages-components/PageHeading';
import Accordion from 'src/pier-design-system/components/accordion/Accordion';

export default function ComponentPage({ appData, component }) {
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Components', link: '', disabled: true },
        { label: component.title, link: '', disabled: true },
    ];

    return (
        <Fragment>
            <Head>
                <title>{component.title} | Pier Design System</title>
            </Head>
            <Layout appData={appData}>
                <PageHeading
                    breadcrumbs={breadcrumbs}
                    title={component.title}
                    lastUpdated={component['last-updated']}
                    description={component.description}
                ></PageHeading>
                {component.variations.map((variation) => (
                    <Section key={variation.name}>
                        <Heading size="sm">{variation.name}</Heading>
                        <BodyText>{variation.description}</BodyText>
                        <Card dark={variation.dark} className="-m-b-0 -br-b-0">
                            <Section>{htmlReactParse(variation.markup)}</Section>
                        </Card>
                        <Well className="-m-b-0 -br-t-0" style={{ marginTop: '-1px' }}>
                            <Accordion title="HTML markup" icon="far fa-code" inCard size="xs" className="-m-b-0">
                                <Section>
                                    <CodeBlock size="xs">
                                        {prettier.format(variation.markup, {
                                            parser: 'html',
                                            plugins: [parserHtml],
                                            tabWidth: 4,
                                        })}
                                    </CodeBlock>
                                </Section>
                            </Accordion>
                        </Well>
                    </Section>
                ))}
            </Layout>
        </Fragment>
    );
}

ComponentPage.propTypes = {
    appData: PropTypes.object,
    component: PropTypes.object,
};

export async function getStaticPaths() {
    const paths = API.components.map((component) => ({
        params: { slug: component.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const result = API.components.filter((component) => component.slug === params.slug);
    return {
        props: {
            appData: API,
            component: result[0],
        },
    };
}
