import Head from 'next/head';
import PropTypes from 'prop-types';
import API from 'src/documentation/API';
import NextLink from 'next/link';
import { Fragment } from 'react';
import Layout from 'src/pages-components/Layout';
import BodyContent from 'src/pages-components/BodyContent';
import PageHeading from 'src/pages-components/PageHeading';
import Section from 'src/pier-design-system/components/containers/Section';
import Card from 'src/pier-design-system/components/containers/Card';
import BodyText from 'src/pier-design-system/components/text/BodyText';
import Heading from 'src/pier-design-system/components/text/Heading';

export default function Home({ appData }) {
    const abstracts = appData.abstracts;
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Attributes', link: '', disabled: true },
    ];
    return (
        <Fragment>
            <Head>
                <title>Attributes | Pier Design System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading breadcrumbs={breadcrumbs} title="Attributes" lastUpdated="7/16/2021" description="The Pier Design System team"></PageHeading>

                    <a>
                        {' '}
                        <Section>
                            <Card className="-m-b-0">
                                <Section className="-p-h-8 -p-v-8">
                                    <Heading size="sm">Contributers to Pier Design System</Heading>
                                    <div className="-d-flex -p-v-8">
                                        {' '}
                                        <img src="/avatar.svg" alt="" style={{ width: '10%' }} />
                                        <Heading size="sm" className="pier-fonts -p-t-8 -p-l-10">
                                            Jarrod Dowalter
                                            <BodyText size="md" className="pier-fonts">
                                                Design Manager
                                            </BodyText>
                                        </Heading>
                                    </div>

                                    <div className="-d-flex -p-v-8">
                                        {' '}
                                        <img src="/avatar.svg" alt="" style={{ width: '10%' }} />
                                        <BodyText size="md" className="pier-fonts -p-t-8 -p-l-10">
                                            Yeony Choi
                                        </BodyText>
                                    </div>
                                    <div className="-d-flex -p-v-8">
                                        {' '}
                                        <img src="/avatar.svg" alt="" style={{ width: '10%' }} />
                                        <BodyText size="md" className="pier-fonts -p-t-8 -p-l-10">
                                            Dan McKenna
                                        </BodyText>
                                    </div>
                                </Section>
                            </Card>
                        </Section>
                    </a>
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
