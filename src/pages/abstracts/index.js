import Head from 'next/head';
import PropTypes from 'prop-types';
import API from 'src/documentation/API';
import { Fragment } from 'react';
import Layout from 'src/pages-components/Layout';
import BodyContent from 'src/pages-components/BodyContent';
import PageHeading from 'src/pages-components/PageHeading';

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
                        description="This is the abstracts page for Pier Design System."
                    ></PageHeading>

                    
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
