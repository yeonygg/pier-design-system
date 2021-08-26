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
                                    <Heading size="sm">About Pier</Heading>
                                    <BodyText size="md" className="pier-fonts">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </BodyText>
                                </Section>
                            </Card>
                        </Section>
                        <Section>
                            <Card className="-m-b-0">
                                <Section className="-p-h-8 -p-v-8">
                                    <Heading size="sm">Contributers to Pier Design System</Heading>
                                    <div className="-d-flex -p-l-6">
                                        {' '}
                                        <img src="/avatar.svg" alt="" style={{ width: '10%' }} />
                                        <Heading size="sm" className="pier-fonts -p-t-6 -p-l-10">
                                            Jarrod Dowalter
                                            <BodyText size="md" className="pier-fonts">
                                                Design Manager
                                            </BodyText>
                                            <a className="pier-link" href="" target="_blank">
                                                <i class="fab fa-linkedin -c-gray-2 -p-r-3"></i>
                                            </a>
                                            <a className="pier-link" href="" target="_blank">
                                                <i class="fas fa-link -c-gray-2"></i>
                                            </a>
                                        </Heading>
                                    </div>

                                    <div className="-d-flex -p-l-6">
                                        {' '}
                                        <img src="/avatar.svg" alt="" style={{ width: '10%' }} />
                                        <Heading size="sm" className="pier-fonts -p-t-6 -p-l-10">
                                            Yeony Choi
                                            <BodyText size="md" className="pier-fonts">
                                                Full Stack Designer
                                            </BodyText>
                                            <a className="pier-link" href="" target="_blank">
                                                <i class="fab fa-linkedin -c-gray-2 -p-r-3"></i>
                                            </a>
                                            <a className="pier-link" href="" target="_blank">
                                                <i class="fas fa-link -c-gray-2"></i>
                                            </a>
                                        </Heading>
                                    </div>
                                    <div className="-d-flex -p-l-6">
                                        {' '}
                                        <img src="/avatar.svg" alt="" style={{ width: '10%' }} />
                                        <Heading size="sm" className="pier-fonts -p-t-6 -p-l-10">
                                            Dan McKenna
                                            <BodyText size="md" className="pier-fonts">
                                                Director, Creative Services
                                            </BodyText>
                                            <a className="pier-link" href="" target="_blank">
                                                <i class="fab fa-linkedin -c-gray-2 -p-r-3"></i>
                                            </a>
                                            <a className="pier-link" href="" target="_blank">
                                                <i class="fas fa-link -c-gray-2"></i>
                                            </a>
                                        </Heading>
                                    </div>

                                    <div className="-d-flex -p-l-6">
                                        {' '}
                                        <img src="/avatar.svg" alt="" style={{ width: '10%' }} />
                                        <Heading size="sm" className="pier-fonts -p-t-6 -p-l-10">
                                            Liam King
                                            <BodyText size="md" className="pier-fonts">
                                                Interactive Designer
                                            </BodyText>
                                        </Heading>
                                    </div>
                                </Section>
                            </Card>
                        </Section>
                        <Section className="-p-h-8 -p-v-8">
                            <BodyText size="md" className="pier-fonts">
                                Pier Design System is creative property of Gumgum, Inc. All rights reserved, etc
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
