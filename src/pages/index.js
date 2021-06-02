import Head from 'next/head';
import PropTypes from 'prop-types';
import API from 'src/documentation/API';
import { Fragment } from 'react';
import Layout from 'src/pages-components/Layout';
import Heading from 'src/pier-design-system/components/text/Heading';
import BodyText from 'src/pier-design-system/components/text/BodyText';
import Section from 'src/pier-design-system/components/containers/Section';

export default function Home({ appData }) {
    return (
        <Fragment>
            <Head>
                <title>Pier Design System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout appData={appData}>
                <Fragment>
                    <div className="pier-hero-image">
                        <Section className="-d-flex -justify-content-center">
                            <img style={{ width: '17%' }} src="/gumgum_logo.svg" />
                        </Section>
                        <Section>
                            <Heading size="md" className="-d-flex -justify-content-center -c-white -m-b-2 -m-t-10">
                                Welcome to Pier Design System!
                            </Heading>
                            <Section className="-m-h-12 -p-h-12">
                                <BodyText size="sm" className="-c-white -t-a-center -m-b-10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae semper sem. Maecenas convallis suscipit eu. Donec
                                    enim, consectetur ut nisl vel, posuere rhoncus augue.
                                </BodyText>
                            </Section>

                            <Section className="-m-v-12"></Section>
                        </Section>
                    </div>
                </Fragment>
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
