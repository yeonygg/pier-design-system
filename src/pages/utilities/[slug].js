import Head from 'next/head';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Layout from 'src/pages-components/Layout';
import API from 'src/documentation/API';
import BodyText from 'src/pier-design-system/components/text/BodyText';
import Section from 'src/pier-design-system/components/containers/Section';
import Card from 'src/pier-design-system/components/containers/Card';
import PageHeading from 'src/pages-components/PageHeading';
import BodyContent from 'src/pages-components/BodyContent';
import utilities from '../api/utilities';
import { componentFactoryName } from 'angular-html-parser/lib/compiler/src/compile_metadata';
import utilitiesData from 'src/documentation/utilities/_utilitiesData';

export default function ComponentPage({ appData, utility }) {
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Utilities', link: '', disabled: true },
        { label: utility.title, link: '', disabled: true },
    ];

    return (
        <Fragment>
            <Head>
                <title>{utility.title} | Pier Design System</title>
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading breadcrumbs={breadcrumbs} title={utility.title} lastUpdated={utility['last-updated']}></PageHeading>
                    {utility.title === 'Color' && (
                        <Section>
                            <Card>
                                <div className="pier-item--gradient -bgc-primaryBoulevard-90"></div>
                            </Card>
                        </Section>
                    )}
                    <Section>
                        {utility.variations.map((item, i) => {
                            return (
                                <Card key={i} className="-m-b-5">
                                    <Section>
                                        <BodyText className={item.description == '' ? '-m-b-0' : ''}>
                                            <span className="pier-body-text__inline-code" style={{ userSelect: 'auto' }}>
                                                {item.class}
                                            </span>
                                        </BodyText>
                                        <BodyText className="-m-b-0">{item.description}</BodyText>
                                    </Section>
                                </Card>
                            );
                        })}
                    </Section>
                </BodyContent>
            </Layout>
        </Fragment>
    );
}

ComponentPage.propTypes = {
    appData: PropTypes.object,
    utility: PropTypes.object,
};

export async function getStaticPaths() {
    const paths = API.utilities.map((utility) => ({
        params: { slug: utility.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const result = API.utilities.filter((utility) => utility.slug === params.slug);
    return {
        props: {
            appData: API,
            utility: result[0],
        },
    };
}
