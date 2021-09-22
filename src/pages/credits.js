import Head from 'next/head';
import PropTypes from 'prop-types';
import API from 'src/documentation/API';
import NextLink from 'next/link';
import { Fragment } from 'react';
import Layout from 'src/pages-components/Layout';
import BodyContent from 'src/pages-components/BodyContent';
import PageHeading from 'src/pages-components/PageHeading';
import { IconButton, Heading, BodyText, Section, Card } from 'dist';

export default function Home({ appData }) {
    const abstracts = appData.abstracts;
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Credits', link: '', disabled: true },
    ];
    return (
        <Fragment>
            <Head>
                <title>Credits | Pier Design System</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading breadcrumbs={breadcrumbs} title="Credits"></PageHeading>

                    <a>
                        {' '}
                        <Section className="-p-h-8 -p-v-8">
                            <Heading size="sm">About Pier</Heading>
                            <BodyText size="md" className="pier-fonts">
                                Pier Design System is Gumgum's UX/UI design system and React component library built to create presentational web projects and
                                applications.
                            </BodyText>
                        </Section>
                        <Section>
                            <Heading size="sm">Contributers to Pier Design System</Heading>
                            <div className="-d-flex -flex-wrap">
                                <Card style={{ width: '50%' }}>
                                    <div className="-d-flex -p-l-6">
                                        {' '}
                                        <img src="/avatar.svg" alt="" style={{ width: '10%' }} />
                                        <Heading size="xs" className="pier-fonts -p-t-6 -p-l-10">
                                            Jarrod Dowalter
                                            <BodyText size="md" className="pier-fonts">
                                                Design Manager
                                            </BodyText>
                                        </Heading>
                                    </div>
                                </Card>
                                <Card style={{ width: '50%' }}>
                                    <div className="-d-flex -p-l-6">
                                        {' '}
                                        <img src="/avatar.svg" alt="" style={{ width: '10%' }} />
                                        <Heading size="xs" className="pier-fonts -p-t-6 -p-l-10">
                                            Yeony Choi
                                            <BodyText size="md" className="pier-fonts">
                                                Full Stack Designer
                                            </BodyText>
                                        </Heading>
                                    </div>
                                </Card>

                                <Card style={{ width: '50%' }}>
                                    <div className="-d-flex -p-l-6">
                                        <img src="/avatar.svg" alt="" style={{ width: '10%' }} />
                                        <Heading size="xs" className="pier-fonts -p-t-6 -p-l-10">
                                            Dan McKenna
                                            <BodyText size="md" className="pier-fonts">
                                                Director, Creative Services
                                            </BodyText>
                                        </Heading>
                                    </div>
                                </Card>
                                <Card style={{ width: '50%' }}>
                                    <div className="-d-flex -p-l-6">
                                        {' '}
                                        <img src="/avatar.svg" alt="" style={{ width: '10%' }} />
                                        <Heading size="xs" className="pier-fonts -p-t-6 -p-l-10">
                                            Liam King
                                            <BodyText size="md" className="pier-fonts">
                                                Interactive Designer
                                            </BodyText>
                                        </Heading>
                                    </div>
                                </Card>
                            </div>
                        </Section>
                        <Section className="-p-h-8 -p-v-8">
                            <BodyText size="md" className="pier-fonts">
                                Pier Design System is creative property of Gumgum, Inc. All rights reserved 2021, etc.
                            </BodyText>
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
