import Head from 'next/head';
import PropTypes from 'prop-types';
import API from 'src/documentation/API';
import { Fragment } from 'react';
import Layout from 'src/pages-components/Layout';
import BodyContent from 'src/pages-components/BodyContent';

export default function Home({ appData }) {
    return (
        <Fragment>
            <Head>
                <title>Utilities | Pier Design System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout appData={appData}>
                <BodyContent></BodyContent>
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
