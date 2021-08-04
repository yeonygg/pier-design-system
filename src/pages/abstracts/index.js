import Head from 'next/head';
import PropTypes from 'prop-types';
import API from 'src/documentation/API';
import { Fragment } from 'react';
import Layout from 'src/pages-components/Layout';
import BodyContent from 'src/pages-components/BodyContent';
import PageHeading from 'src/pages-components/PageHeading';
import Section from 'src/pier-design-system/components/containers/Section';
import Card from 'src/pier-design-system/components/containers/Card';
import BodyText from 'src/pier-design-system/components/text/BodyText';
import Heading from 'src/pier-design-system/components/text/Heading';

export default function Home({ appData }) {
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Abstracts', link: '', disabled: true },
    ];
    return (
        <Fragment>
            <Head>
                <title>Abstracts | Pier Design System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading
                        breadcrumbs={breadcrumbs}
                        title="Abstracts"
                        lastUpdated="7/16/2021"
                        description="This is a list of utilities for Pier Design System."
                    ></PageHeading>
                    <Section>
                        <Card isLink className="-m-b-0">
                            <Section className="-p-h-8 -p-v-8">
                                <img src="/grid_img.png" alt="Girl in a jacket" style={{ width: '100%' }} />
                                <Heading className="-p-t-6" size="sm">
                                    Grid
                                </Heading>
                            </Section>
                        </Card>
                    </Section>
                </BodyContent>
            </Layout>
        </Fragment>
    );
}

Home.propTypes = {
    appData: PropTypes.object,
};

export async function getStaticProps() {
    return {
        props: {
            appData: API,
        },
    };
}
