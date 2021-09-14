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
import utilities from '../api/utilities';

export default function UtilitiesIndex({ appData }) {
    const utilities = appData.utilities;
    //components is an array of objects
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Utilities', link: '', disabled: true },
    ];

    return (
        <Fragment>
            <Head>
                <title>Utilities | Pier Design System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading
                        breadcrumbs={breadcrumbs}
                        title="Utilities"
                        lastUpdated="7/16/2021"
                        description="This is a list of utilities for Pier Design System."
                    ></PageHeading>
                    <div className="pier-container">
                        <div className="component-grid -p-v-8">
                            {utilities.map((item, index) => {
                                return (
                                    <NextLink href={`/utilities/${item.slug}`}>
                                        <a>
                                            <Card isLink style={{ height: '250px' }} className="-d-flex -align-items-center">
                                                <Section>
                                                    <Heading size="sm" className="-m-b-2">
                                                        <Link>{item.title}</Link>
                                                    </Heading>
                                                    <BodyText className="-m-b-0">{item.description}</BodyText>
                                                </Section>
                                            </Card>
                                        </a>
                                    </NextLink>
                                );
                            })}
                        </div>
                    </div>
                </BodyContent>
            </Layout>
        </Fragment>
    );
}

UtilitiesIndex.propTypes = {
    appData: PropTypes.object,
};

export async function getStaticProps() {
    return {
        props: {
            appData: API,
        },
    };
}
