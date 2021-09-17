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

export default function ComponentsIndex({ appData }) {
    const components = appData.components;
    //components is an array of objects
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Components', link: '', disabled: true },
    ];

    function ComponentCard({ title, description, image, imageColor }) {
        const [isShown, setIsShown] = useState(false);
        return (
            <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <Card isLink onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style={{ height: '340px' }}>
                    <Section>
                        {
                            <img
                                className={isShown ? '-pos-absolute -z-10' : '-pos-absolute -z-10 -hide'}
                                src={imageColor}
                                width="220px"
                                style={{ transition: 'opacity 0.4s ease' }}
                            />
                        }
                        <img src={image} width="220px"></img>

                        <div className="-p-t-4 -p-l-2">
                            <Heading size="sm" className="-m-b-5">
                                <Link>{title}</Link>
                            </Heading>
                            <BodyText size="sm" className="-m-b-4">
                                {description}
                            </BodyText>
                        </div>
                    </Section>
                </Card>
            </div>
        );
    }

    return (
        <Fragment>
            <Head>
                <title>Components | Pier Design System</title>
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading breadcrumbs={breadcrumbs} title="Components"></PageHeading>

                    <div className="pier-container">
                        <div className="component-grid -p-v-8">
                            {components.map((item, index) => {
                                return (
                                    <NextLink href={`/components/${item.slug}`}>
                                        <a>
                                            <ComponentCard
                                                title={item.title}
                                                image={item.image}
                                                imageColor={item.imageColor}
                                                description={item.description}
                                            ></ComponentCard>
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
