import Head from 'next/head';
import PropTypes from 'prop-types';
import API from 'src/documentation/API';
import { Fragment } from 'react';
import Layout from 'src/pages-components/Layout';
import Heading from 'src/pier-design-system/components/text/Heading';
import BodyText from 'src/pier-design-system/components/text/BodyText';
import Section from 'src/pier-design-system/components/containers/Section';
import Card from 'src/pier-design-system/components/containers/Card';
import Link from 'src/pier-design-system/components/text/Link';
import NextLink from 'next/link';
import BodyContent from 'src/pages-components/BodyContent';

export default function Home({ appData }) {
    const heroVideo = {
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        position: 'absolute',
        top: '0',
        left: '0',
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
        top: '700px',
        bottom: '0',
        left: '0',
        right: '0',
    };

    return (
        <Fragment>
            <Head>
                <title>Pier Design System</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout appData={appData}>
                <div style={{ postion: 'relative', width: '100%' }}>
                    <div style={heroVideo}>
                        <video style={heroVideo} playsInline autoPlay loop muted>
                            <source src="/hero_video.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div style={heroElement}></div>

                    <BodyContent>
                        <Section className="-d-flex -justify-content-center -p-t-10">
                            <img style={{ width: '17%' }} src="/gumgum_logo.svg" />
                        </Section>
                        <Section>
                            <Heading size="lg" className="-d-flex -justify-content-center -c-white -m-b-4 -m-t-12">
                                Welcome to Pier Design System!
                            </Heading>
                            <Section className="-m-h-12 -p-h-12 -m-b-3">
                                <BodyText size="md" className="-c-white -text-a-center">
                                    Pier Design System is Gumgum's UX/UI design system and React component library built to create presentational web projects
                                    and applications.
                                </BodyText>
                            </Section>
                            <Section className="-d-flex -justify-content-center -m-b-12">
                                <NextLink href={`https://www.npmjs.com/package/pier-design-system`}>
                                    <a>
                                        <button className="pier-button-standard pier-button-standard--secondary pier-button-standard--lg -m-l-4">
                                            Get Started
                                        </button>
                                    </a>
                                </NextLink>
                            </Section>
                            <Section className="-m-v-12"></Section>
                            <Section className="-m-v-12"></Section>
                            <Section className="-m-v-12"></Section>
                        </Section>
                    </BodyContent>
                </div>
                <BodyContent>
                    <Section className="-d-flex -justify-content-center" style={{ marginTop: '-360px' }}>
                        <NextLink href={`/abstracts`}>
                            <a>
                                <Card className="pier-card pier-card--link pier-card--center pier-card--image -p-v-10 -p-h-3 -m-r-5">
                                    <img src="/brain_icon.png" style={{ width: '60%' }} />
                                    <div className="pier-section">
                                        <h1 className="pier-heading pier-heading--sm">Abstracts</h1>
                                        <button className="pier-button-hero pier-button-hero--pill">
                                            <span className="pier-button-hero__content">Explore</span>
                                        </button>
                                    </div>
                                </Card>
                            </a>
                        </NextLink>
                        <NextLink href={`/components`}>
                            <a>
                                <Card className="pier-card pier-card--link pier-card--center pier-card--image -p-v-10 -p-h-3 -m-r-5">
                                    <img src="/components_icon.png" style={{ width: '60%' }} />
                                    <div className="pier-section">
                                        <h1 className="pier-heading pier-heading--sm">Components</h1>
                                        <button className="pier-button-hero pier-button-hero--pill">
                                            <span className="pier-button-hero__content">Explore</span>
                                        </button>
                                    </div>
                                </Card>
                            </a>
                        </NextLink>
                        <NextLink href={`/utilities`}>
                            <a>
                                <Card className="pier-card pier-card--link pier-card--center pier-card--image -p-v-10 -p-h-3">
                                    <img src="/utilities_icon.png" style={{ width: '60%' }} />
                                    <div className="pier-section">
                                        <h1 className="pier-heading pier-heading--sm">Utilities</h1>
                                        <button className="pier-button-hero pier-button-hero--pill">
                                            <span className="pier-button-hero__content">Explore</span>
                                        </button>
                                    </div>
                                </Card>
                            </a>
                        </NextLink>
                    </Section>
                    <Section>
                        <h1 className="pier-heading pier-heading--sm">Links to Resources</h1>
                        <NextLink href={`https://github.com/gg-jarrod/pier-design-system`}>
                            <a target="_blank">
                                <Card className="pier-card">
                                    <div className="pier-section">
                                        <h1 className="pier-heading pier-heading--sm">
                                            <Link>Github</Link>
                                        </h1>
                                        <p className="pier-body-text">Create a fork of Pier to use for your own design system!</p>
                                    </div>
                                </Card>
                            </a>
                        </NextLink>
                        <NextLink href={`https://www.npmjs.com/package/pier-design-system`}>
                            <a target="_blank">
                                <Card className="pier-card">
                                    <div className="pier-section">
                                        <h1 className="pier-heading pier-heading--sm">
                                            <Link>NPM</Link>
                                        </h1>
                                        <p className="pier-body-text">Use Pier in your own web/React project.</p>
                                    </div>
                                </Card>
                            </a>
                        </NextLink>
                    </Section>
                    <Section className="-m-v-12"></Section>
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
