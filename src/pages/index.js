import Head from 'next/head';
import PropTypes from 'prop-types';
import API from 'src/documentation/API';
import { Fragment } from 'react';
import Layout from 'src/pages-components/Layout';
import Heading from 'src/pier-design-system/components/text/Heading';
import BodyText from 'src/pier-design-system/components/text/BodyText';
import Section from 'src/pier-design-system/components/containers/Section';
import Card from 'src/pier-design-system/components/containers/Card';

export default function Home({ appData }) {
    const heroImage = {
        backgroundImage: "url('/head_image.jpg')",
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
    };

    const bodyLayout = {
        maxWidth: '1040px',
        margin: '0 auto',
        width: '100%',
        paddingLeft: '240px',
    };

    const heroElement = {
        backgroundImage: "url('/header_shape.svg')",
        width: '100%',
        height: '40%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        zIndex: '0',
        bottom: '0',
        letf: '0',
        right: '0',
    };

    return (
        <Fragment>
            <Head>
                <title>Pier Design System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout appData={appData} isHome>
                <div style={{ postion: 'relative', width: '100%' }}>
                    <div style={heroImage}></div>

                    <div style={heroElement}></div>

                    <div style={bodyLayout}>
                        <Section className="-d-flex -justify-content-center -p-t-10">
                            <img style={{ width: '17%' }} src="/gumgum_logo.svg" />
                        </Section>
                        <Section>
                            <Heading size="lg" className="-d-flex -justify-content-center -c-white -m-b-4 -m-t-12">
                                Welcome to Pier Design System!
                            </Heading>
                            <Section className="-m-h-12 -p-h-12 -m-b-3">
                                <BodyText size="md" className="-c-white -text-a-center">
                                    Pier Design System is Gumgum's UX/UI design tool built to create Creative Dashboard and future marketing projects! Quickly
                                    design and customize responsive sites!
                                </BodyText>
                            </Section>
                            <Section className="-d-flex -justify-content-center -m-b-12">
                                <button class="pier-button-standard pier-button-standard--secondary pier-button-standard--lg -m-l-4">Get Started</button>
                            </Section>
                            <Section className="-m-v-12"></Section>
                            <Section className="-m-v-12"></Section>
                            <Section className="-m-v-12"></Section>
                        </Section>
                    </div>
                </div>
                <div style={bodyLayout}>
                    <Section className="-d-flex -justify-content-center -p-h-0" style={{marginTop: "-370px"}}>
                        <Card className="pier-card pier-card--link pier-card--center pier-card--image -p-v-10 -p-h-3 -m-r-5">
                            <img src="/brain_icon.png" style={{ width: '60%' }} />
                            <div className="pier-section">
                                <h1 className="pier-heading pier-heading--sm">Abstracts</h1>
                                <p className="pier-body-text -p-b-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                <button className="pier-button-hero pier-button-hero--pill">
                                    <span className="pier-button-hero__content">Explore</span>
                                </button>
                            </div>
                        </Card>

                        <Card className="pier-card pier-card--link pier-card--center pier-card--image -p-v-10 -p-h-3 -m-r-5">
                            <img src="/components_icon.png" style={{ width: '60%' }} />
                            <div className="pier-section">
                                <h1 className="pier-heading pier-heading--sm">Components</h1>
                                <p className="pier-body-text -p-b-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                <button className="pier-button-hero pier-button-hero--pill">
                                    <span className="pier-button-hero__content">Explore</span>
                                </button>
                            </div>
                        </Card>

                        <Card className="pier-card pier-card--link pier-card--center pier-card--image -p-v-10 -p-h-3">
                            <img src="/utilities_icon.png" style={{ width: '60%' }} />
                            <div className="pier-section">
                                <h1 className="pier-heading pier-heading--sm">Utilities</h1>
                                <p className="pier-body-text -p-b-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                                <button className="pier-button-hero pier-button-hero--pill">
                                    <span className="pier-button-hero__content">Explore</span>
                                </button>
                            </div>
                        </Card>
                    </Section>
                </div>
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
