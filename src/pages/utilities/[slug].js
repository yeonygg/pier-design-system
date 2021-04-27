import Head from 'next/head';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Layout from 'src/pages-components/Layout';
import API from 'src/documentation/API';
import BodyText from 'src/pier-design-system/components/text/BodyText';
import Section from 'src/pier-design-system/components/containers/Section';
import Card from 'src/pier-design-system/components/containers/Card';
import PageHeading from 'src/pages-components/PageHeading';

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
                <PageHeading
                    breadcrumbs={breadcrumbs}
                    title={utility.title}
                    lastUpdated={utility['last-updated']}
                    description={utility.description}
                ></PageHeading>
                <Section>
                    {utility.variations.map((item, i) => {
                        return (
                            <Card key={i}>
                                <Section>
                                    <BodyText className={item.description == '' ? '-m-b-0' : ''}>
                                        <span className="pier-body-text__inline-code">{item.class}</span>
                                    </BodyText>
                                    <BodyText className="-m-b-0">{item.description}</BodyText>
                                </Section>
                            </Card>
                        );
                    })}
                </Section>
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
