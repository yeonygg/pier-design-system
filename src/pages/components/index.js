import Head from 'next/head';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import API from 'src/documentation/API';
import NextLink from 'next/link';
import Layout from 'src/pages-components/Layout';
import PageHeading from 'src/pages-components/PageHeading';
import Section from 'src/pier-design-system/components/containers/Section';
import Card from 'src/pier-design-system/components/containers/Card';
import Heading from 'src/pier-design-system/components/text/Heading';
import BodyText from 'src/pier-design-system/components/text/BodyText';
import Link from 'src/pier-design-system/components/text/Link';
import BodyContent from 'src/pages-components/BodyContent';
import React, { useState } from 'react';
import ComponentIcons from 'public/component_icons';

export default function ComponentsIndex({ appData }) {
    const [isShown, setIsShown] = useState(false);
    const components = appData.components;
    //components is an array of objects
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Components', link: '', disabled: true },
    ];

    return (
        <Fragment>
            <Head>
                <title>Components | Pier Design System</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading
                        breadcrumbs={breadcrumbs}
                        title="Components"
                        lastUpdated="5/25/2021"
                        description="This is a list of components for Pier Design System."
                    ></PageHeading>

                    <div className="pier-container">
                        <div className="component-grid -p-v-8">
                            {components.map((item, index) => {
                                return (
                                    <NextLink href={`/components/${item.slug}`}>
                                        <a>
                                            <Card isLink>
                                                <Section>
                                                    <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                                                        {isShown && (
                                                            <img
                                                                className="-pos-absolute -pos-absolute-tl -z-10"
                                                                src="/component_icons/accordian_ro.svg"
                                                                width="220px"
                                                                style={{ transition: 'opacity ease 0.4' }}
                                                            />
                                                        )}
                                                        <img src="/component_icons/accordian.svg" width="220px"></img>
                                                    </div>

                                                    <div className="-p-t-4 -p-l-2">
                                                        <Heading size="sm" className="-m-b-5">
                                                            <Link>{item.title}</Link>
                                                        </Heading>
                                                        <BodyText size="sm" className="-m-b-4">
                                                            {item.description}
                                                        </BodyText>
                                                    </div>
                                                </Section>
                                            </Card>
                                        </a>
                                    </NextLink>
                                );
                            })}
                        </div>
                    </div>
                </BodyContent>
            </Layout>
        </Fragment>
    );
}

ComponentsIndex.propTypes = {
    appData: PropTypes.object,
};

export async function getStaticProps() {
    return {
        props: {
            appData: API,
        },
    };
}
