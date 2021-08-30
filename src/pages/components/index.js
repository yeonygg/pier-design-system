import Head from 'next/head';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import API from 'src/documentation/API';
import NextLink from 'next/link';
import Layout from 'src/pages-components/Layout';
import PageHeading from 'src/pages-components/PageHeading';
import Section from 'src/pier-design-system/components/containers/Section';
import Card from 'src/pier-design-system/components/containers/Card';
import Heading from 'src/pier-design-system/components/text/Heading';
import BodyText from 'src/pier-design-system/components/text/BodyText';
import Link from 'src/pier-design-system/components/text/Link';
import BodyContent from 'src/pages-components/BodyContent';

export default function ComponentsIndex({ appData }) {
    const components = appData.components;
    //components is an array of objects
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Components', link: '', disabled: true },
    ];

    return (
        <Fragment>
            <Head>
                <title>Components | Pier Design System</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading
                        breadcrumbs={breadcrumbs}
                        title="Components"
                        lastUpdated="5/25/2021"
                        description="This is a list of components for Pier Design System."
                    ></PageHeading>
                    <Section>
                        {components.map((item, index) => {
                            return (
                                <NextLink href={`/components/${item.slug}`}>
                                    <a>
                                        <Card isLink>
                                            <Section className="-d-flex">
                                                <div>
                                                    <img src="/components/${item.slug}" width="150px"></img>
                                                </div>
                                                <div className="-p-t-7 -p-l-6">
                                                    <Heading size="sm" className="-m-b-2">
                                                        <Link>{item.title}</Link>
                                                    </Heading>
                                                    <BodyText className="-m-b-0">{item.description}</BodyText>
                                                </div>
                                            </Section>
                                        </Card>
                                    </a>
                                </NextLink>
                            );
                        })}
                    </Section>
                </BodyContent>
            </Layout>
        </Fragment>
    );
}

ComponentsIndex.propTypes = {
    appData: PropTypes.object,
};

export async function getStaticProps() {
    return {
        props: {
            appData: API,
        },
    };
}
