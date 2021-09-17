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
                    <PageHeading breadcrumbs={breadcrumbs} title="Abstracts"></PageHeading>
                    <NextLink href={'/abstracts/grid'}>
                        <a>
                            {' '}
                            <Section>
                                <Card isLink className="-m-b-0">
                                    <Section className="-p-h-8 -p-v-8">
                                        <img src="/grid_img.png" alt="" style={{ width: '100%' }} />
                                        <Heading className="-p-t-8" size="sm">
                                            Grid
                                        </Heading>
                                        <BodyText size="md" className="pier-fonts">
                                            Find all pier design system bootstrap grids with auto-layout columns, responsive classes, offsets here.
                                        </BodyText>
                                    </Section>
                                </Card>
                            </Section>
                        </a>
                    </NextLink>

                    <NextLink href={'/abstracts/colors'}>
                        <a>
                            {' '}
                            <Section>
                                <Card isLink className="-m-b-0">
                                    <Section className="-p-h-10 -p-v-10">
                                        <img src="/colors_img.png" alt="" style={{ width: '100%' }} />
                                        <Heading className="-p-t-8" size="sm">
                                            Colors
                                        </Heading>
                                        <BodyText size="md" className="pier-fonts">
                                            Find all pier design system colors, gradients, HEX values and color codes here.
                                        </BodyText>
                                    </Section>
                                </Card>
                            </Section>
                        </a>
                    </NextLink>

                    <NextLink href={'/abstracts/fonts'}>
                        <a>
                            {' '}
                            <Section>
                                <Card isLink className="-m-b-0">
                                    <Section className="-p-h-10 -p-v-10">
                                        <img src="/fonts_img.png" alt="" style={{ width: '100%' }} />
                                        <Heading className="-p-t-8" size="sm">
                                            Fonts/Icons
                                        </Heading>
                                        <BodyText size="md" className="pier-fonts">
                                            Find all pier design system fonts codes and downloads here.
                                        </BodyText>
                                    </Section>
                                </Card>
                            </Section>
                        </a>
                    </NextLink>

                    <NextLink href={'/abstracts/logos'}>
                        <a>
                            {' '}
                            <Section>
                                <Card isLink className="-m-b-0">
                                    <Section className="-p-h-10 -p-v-10">
                                        <img src="/logos_img.png" alt="" style={{ width: '100%' }} />
                                        <Heading className="-p-t-8" size="sm">
                                            Logos
                                        </Heading>
                                        <BodyText size="md" className="pier-fonts">
                                            Find all pier design system and gumgum logos here.
                                        </BodyText>
                                    </Section>
                                </Card>
                            </Section>
                        </a>
                    </NextLink>
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
