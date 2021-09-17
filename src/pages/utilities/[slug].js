import Head from 'next/head';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Layout from 'src/pages-components/Layout';
import API from 'src/documentation/API';
import PageHeading from 'src/pages-components/PageHeading';
import BodyContent from 'src/pages-components/BodyContent';
import utilities from '../api/utilities';
import { componentFactoryName } from 'angular-html-parser/lib/compiler/src/compile_metadata';
import utilitiesData from 'src/documentation/utilities/_utilitiesData';
import { Heading, Accordion, BodyText, CodeBlock, Card, Section } from 'dist';

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
                            <Card className="-overflow-hidden -m-b-5">
                                <Accordion title="Colors" inCard>
                                    <div>
                                        <Accordion title="Gradients">
                                            <Section>
                                                <div className="-bgc-primaryBoulevard-0 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-primaryBoulevard-0</CodeBlock>
                                                </div>
                                                <div className="-bgc-primaryBoulevard-90 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-primaryBoulevard-90</CodeBlock>
                                                </div>
                                                <div className="-bgc-primaryBoulevard-180 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-primaryBoulevard-180</CodeBlock>
                                                </div>
                                                <div className="-bgc-primaryBoulevard-270 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-primaryBoulevard-270</CodeBlock>
                                                </div>
                                                <div className="-bgc-deepOcean-0 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-deepOcean-0</CodeBlock>
                                                </div>
                                                <div className="-bgc-deepOcean-90 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-deepOcean-90</CodeBlock>
                                                </div>
                                                <div className="-bgc-deepOcean-180 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-deepOcean-180</CodeBlock>
                                                </div>
                                                <div className="-bgc-deepOcean-270 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-deepOcean-270</CodeBlock>
                                                </div>
                                                <div className="-bgc-neonSky-0 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-neonSky-0</CodeBlock>
                                                </div>
                                                <div className="-bgc-neonSky-90 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-neonSky-90</CodeBlock>
                                                </div>
                                                <div className="-bgc-neonSky-180 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-neonSky-180</CodeBlock>
                                                </div>
                                                <div className="-bgc-neonSky-270 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-neonSky-270</CodeBlock>
                                                </div>
                                                <div className="-bgc-earlySunset-0 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-earlySunset-0</CodeBlock>
                                                </div>
                                                <div className="-bgc-earlySunset-90 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-earlySunset-90</CodeBlock>
                                                </div>
                                                <div className="-bgc-earlySunset-180 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-earlySunset-180</CodeBlock>
                                                </div>
                                                <div className="-bgc-earlySunset-270 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-earlySunset-270</CodeBlock>
                                                </div>
                                                <div className="-bgc-firesideGlow-0 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-firesideGlow-0</CodeBlock>
                                                </div>
                                                <div className="-bgc-firesideGlow-90 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-firesideGlow-90</CodeBlock>
                                                </div>
                                                <div className="-bgc-firesideGlow-180 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-firesideGlow-180</CodeBlock>
                                                </div>
                                                <div className="-bgc-firesideGlow-270 -m-b-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-firesideGlow-270</CodeBlock>
                                                </div>
                                            </Section>
                                        </Accordion>

                                        <Accordion title="Light Grays">
                                            <Section>
                                                <div className="-bgc-white -bd-1-light-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-bgc-white</CodeBlock>
                                                </div>
                                                <div className="-bgc-dark-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-c-white</CodeBlock>
                                                </div>
                                                <div className="-bd-1-white -bgc-dark-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bdc-white</CodeBlock>
                                                </div>
                                                <div className="-bgc-light-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-bgc-light-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-light-3">-c-light-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-light-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-bdc-light-3</CodeBlock>
                                                </div>

                                                <div className="-bgc-light-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-bgc-light-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-light-2">-c-light-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-light-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-bdc-light-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-light-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-bgc-light-1</CodeBlock>
                                                </div>
                                                <div className="-bgc-white">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-light-1">-c-light-1</CodeBlock>
                                                </div>
                                                <div className="-bd-1-light-1 -bgc-white -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-bdc-light-1</CodeBlock>
                                                </div>
                                                <div className="-bgc-gray-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-bgc-gray-4</CodeBlock>
                                                </div>
                                                <div className="-bgc-white">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-gray-4">-c-gray-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-gray-4 -bgc-white -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-bdc-gray-4</CodeBlock>
                                                </div>
                                                <div className="-bgc-gray-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-gray-3</CodeBlock>
                                                </div>
                                                <div className="-bgc-white">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-gray-3">-c-gray-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-gray-3 -bgc-white -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-bdc-gray-3</CodeBlock>
                                                </div>
                                            </Section>
                                        </Accordion>

                                        <Accordion title="Dark Grays">
                                            <Section>
                                                <div className="-bgc-gray-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-gray-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-white">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-gray-2">-c-gray-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-gray-2 -bgc-white -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-gray-2">-bdc-gray-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-gray">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-gray</CodeBlock>
                                                </div>
                                                <div className="-bgc-white">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-gray">-c-gray</CodeBlock>
                                                </div>
                                                <div className="-bd-1-gray -bgc-white -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-gray">-bdc-gray</CodeBlock>
                                                </div>
                                                <div className="-bgc-dark-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bgc-white">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-c-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bd-1-dark-1 -bgc-white -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-1">-bdc-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bgc-dark-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-white">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-2">-c-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-dark-2 -bgc-white -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-2">-bdc-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-dark-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bgc-white">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-3">-c-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-dark-3 -bgc-white -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-3">-bdc-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bgc-dark-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-dark-4</CodeBlock>
                                                </div>
                                                <div className="-bgc-white">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-c-dark-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-dark-4 -bgc-white -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bdc-dark-4</CodeBlock>
                                                </div>
                                                <div className="-bgc-black">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-black</CodeBlock>
                                                </div>
                                                <div className="-bgc-white">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-black">-c-black</CodeBlock>
                                                </div>
                                                <div className="-bd-1-black -bgc-white -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-black">-bdc-black</CodeBlock>
                                                </div>
                                            </Section>
                                        </Accordion>

                                        <Accordion title="Primary">
                                            <Section>
                                                <div className="-bgc-cyan-light-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-cyan-light-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-light-4">-c-cyan-light-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-cyan-light-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-light-4">-bdc-cyan-light-4</CodeBlock>
                                                </div>
                                                <div className="-bgc-cyan-light-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-cyan-light-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-light-3">-c-cyan-light-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-cyan-light-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-light-3">-bdc-cyan-light-3</CodeBlock>
                                                </div>

                                                <div className="-bgc-cyan-light-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-cyan-light-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-light-2">-c-cyan-light-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-cyan-light-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-light-2">-bdc-cyan-light-2</CodeBlock>
                                                </div>

                                                <div className="-bgc-cyan">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-cyan</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan">-c-cyan</CodeBlock>
                                                </div>
                                                <div className="-bd-1-cyan -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan">-bdc-cyan</CodeBlock>
                                                </div>
                                                <div className="-bgc-cyan-dark-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-cyan-dark-1</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-dark-1">-c-cyan-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bd-1-cyan-dark-1 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-dark-1">-bdc-cyan-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bgc-cyan-dark-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-cyan-dark-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-dark-2">-c-cyan-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-cyan-dark-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-dark-2">-bdc-cyan-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-cyan-dark-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-cyan-dark-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-dark-3">-c-cyan-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-cyan-dark-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-dark-3">-bdc-cyan-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bgc-cyan-dark-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-cyan-dark-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-dark-4">-c-cyan-dark-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-cyan-dark-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-cyan-dark-4">-bdc-cyan-dark-4</CodeBlock>
                                                </div>
                                            </Section>
                                        </Accordion>

                                        <Accordion title="Green">
                                            <Section>
                                                <div className="-bgc-green-light-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-green-light-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-light-4">-c-green-light-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-green-light-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-light-4">-bdc-green-light-4</CodeBlock>
                                                </div>
                                                <div className="-bgc-green-light-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-green-light-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-light-3">-c-green-light-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-green-light-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-light-3">-bdc-green-light-3</CodeBlock>
                                                </div>

                                                <div className="-bgc-green-light-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-green-light-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-light-2">-c-green-light-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-green-light-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-light-2">-bdc-green-light-2</CodeBlock>
                                                </div>

                                                <div className="-bgc-green">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-green</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green">-c-green</CodeBlock>
                                                </div>
                                                <div className="-bd-1-green -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green">-bdc-green</CodeBlock>
                                                </div>
                                                <div className="-bgc-green-dark-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-green-dark-1</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-dark-1">-c-green-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bd-1-green-dark-1 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-dark-1">-bdc-green-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bgc-green-dark-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-green-dark-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-dark-2">-c-green-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-green-dark-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-dark-2">-bdc-green-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-green-dark-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-green-dark-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-dark-3">-c-green-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-green-dark-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-dark-3">-bdc-green-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bgc-green-dark-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-green-dark-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-dark-4">-c-green-dark-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-green-dark-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-green-dark-4">-bdc-green-dark-4</CodeBlock>
                                                </div>
                                            </Section>
                                        </Accordion>

                                        <Accordion title="Blue">
                                            <Section>
                                                <div className="-bgc-blue-light-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-blue-light-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-light-4">-c-blue-light-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-blue-light-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-light-4">-bdc-blue-light-4</CodeBlock>
                                                </div>
                                                <div className="-bgc-blue-light-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-blue-light-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-light-3">-c-blue-light-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-blue-light-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-light-3">-bdc-blue-light-3</CodeBlock>
                                                </div>

                                                <div className="-bgc-blue-light-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-blue-light-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-light-2">-c-blue-light-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-blue-light-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-light-2">-bdc-blue-light-2</CodeBlock>
                                                </div>

                                                <div className="-bgc-blue">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-blue</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue">-c-blue</CodeBlock>
                                                </div>
                                                <div className="-bd-1-blue -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue">-bdc-blue</CodeBlock>
                                                </div>
                                                <div className="-bgc-blue-dark-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-blue-dark-1</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-dark-1">-c-blue-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bd-1-blue-dark-1 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-dark-1">-bdc-blue-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bgc-blue-dark-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-blue-dark-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-dark-2">-c-blue-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-blue-dark-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-dark-2">-bdc-blue-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-blue-dark-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-blue-dark-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-dark-3">-c-blue-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-blue-dark-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-dark-3">-bdc-blue-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bgc-blue-dark-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-blue-dark-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-dark-4">-c-blue-dark-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-blue-dark-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-blue-dark-4">-bdc-blue-dark-4</CodeBlock>
                                                </div>
                                            </Section>
                                        </Accordion>

                                        <Accordion title="Teal">
                                            <Section>
                                                <div className="-bgc-teal-light-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-teal-light-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-light-4">-c-teal-light-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-teal-light-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-light-4">-bdc-teal-light-4</CodeBlock>
                                                </div>
                                                <div className="-bgc-teal-light-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-teal-light-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-light-3">-c-teal-light-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-teal-light-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-light-3">-bdc-teal-light-3</CodeBlock>
                                                </div>

                                                <div className="-bgc-teal-light-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-teal-light-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-light-2">-c-teal-light-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-teal-light-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-light-2">-bdc-teal-light-2</CodeBlock>
                                                </div>

                                                <div className="-bgc-teal">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-teal</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal">-c-teal</CodeBlock>
                                                </div>
                                                <div className="-bd-1-teal -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal">-bdc-teal</CodeBlock>
                                                </div>
                                                <div className="-bgc-teal-dark-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-teal-dark-1</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-dark-1">-c-teal-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bd-1-teal-dark-1 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-dark-1">-bdc-teal-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bgc-teal-dark-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-teal-dark-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-dark-2">-c-teal-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-teal-dark-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-dark-2">-bdc-teal-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-teal-dark-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-teal-dark-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-dark-3">-c-teal-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-teal-dark-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-dark-3">-bdc-teal-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bgc-teal-dark-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-teal-dark-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-dark-4">-c-teal-dark-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-teal-dark-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-teal-dark-4">-bdc-teal-dark-4</CodeBlock>
                                                </div>
                                            </Section>
                                        </Accordion>

                                        <Accordion title="Yellow">
                                            <Section>
                                                <div className="-bgc-yellow-light-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-yellow-light-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-light-4">-c-yellow-light-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-yellow-light-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-light-4">-bdc-yellow-light-4</CodeBlock>
                                                </div>
                                                <div className="-bgc-yellow-light-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-yellow-light-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-light-3">-c-yellow-light-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-yellow-light-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-light-3">-bdc-yellow-light-3</CodeBlock>
                                                </div>

                                                <div className="-bgc-yellow-light-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-yellow-light-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-light-2">-c-yellow-light-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-yellow-light-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-light-2">-bdc-yellow-light-2</CodeBlock>
                                                </div>

                                                <div className="-bgc-yellow">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-yellow</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow">-c-yellow</CodeBlock>
                                                </div>
                                                <div className="-bd-1-yellow -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow">-bdc-yellow</CodeBlock>
                                                </div>
                                                <div className="-bgc-yellow-dark-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-yellow-dark-1</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-dark-1">-c-yellow-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bd-1-yellow-dark-1 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-dark-1">-bdc-yellow-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bgc-yellow-dark-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-yellow-dark-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-dark-2">-c-yellow-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-yellow-dark-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-dark-2">-bdc-yellow-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-yellow-dark-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-yellow-dark-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-dark-3">-c-yellow-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-yellow-dark-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-dark-3">-bdc-yellow-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bgc-yellow-dark-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-yellow-dark-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-dark-4">-c-yellow-dark-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-yellow-dark-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-yellow-dark-4">-bdc-yellow-dark-4</CodeBlock>
                                                </div>
                                            </Section>
                                        </Accordion>

                                        <Accordion title="Orange">
                                            <Section>
                                                <div className="-bgc-orange-light-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-orange-light-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-light-4">-c-orange-light-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-orange-light-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-light-4">-bdc-orange-light-4</CodeBlock>
                                                </div>
                                                <div className="-bgc-orange-light-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-orange-light-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-light-3">-c-orange-light-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-orange-light-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-light-3">-bdc-orange-light-3</CodeBlock>
                                                </div>

                                                <div className="-bgc-orange-light-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-orange-light-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-light-2">-c-orange-light-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-orange-light-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-light-2">-bdc-orange-light-2</CodeBlock>
                                                </div>

                                                <div className="-bgc-orange">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-orange</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange">-c-orange</CodeBlock>
                                                </div>
                                                <div className="-bd-1-orange -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange">-bdc-orange</CodeBlock>
                                                </div>
                                                <div className="-bgc-orange-dark-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-orange-dark-1</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-dark-1">-c-orange-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bd-1-orange-dark-1 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-dark-1">-bdc-orange-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bgc-orange-dark-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-orange-dark-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-dark-2">-c-orange-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-orange-dark-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-dark-2">-bdc-orange-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-orange-dark-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-orange-dark-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-dark-3">-c-orange-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-orange-dark-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-dark-3">-bdc-orange-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bgc-orange-dark-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-orange-dark-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-dark-4">-c-orange-dark-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-orange-dark-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-orange-dark-4">-bdc-orange-dark-4</CodeBlock>
                                                </div>
                                            </Section>
                                        </Accordion>

                                        <Accordion title="Red">
                                            <Section>
                                                <div className="-bgc-red-light-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-red-light-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-light-4">-c-red-light-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-red-light-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-light-4">-bdc-red-light-4</CodeBlock>
                                                </div>
                                                <div className="-bgc-red-light-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-red-light-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-light-3">-c-red-light-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-red-light-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-light-3">-bdc-red-light-3</CodeBlock>
                                                </div>

                                                <div className="-bgc-red-light-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-dark-4">-bgc-red-light-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-light-2">-c-red-light-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-red-light-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-light-2">-bdc-red-light-2</CodeBlock>
                                                </div>

                                                <div className="-bgc-red">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-red</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red">-c-red</CodeBlock>
                                                </div>
                                                <div className="-bd-1-red -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red">-bdc-red</CodeBlock>
                                                </div>
                                                <div className="-bgc-red-dark-1">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-red-dark-1</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-dark-1">-c-red-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bd-1-red-dark-1 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-dark-1">-bdc-red-dark-1</CodeBlock>
                                                </div>
                                                <div className="-bgc-red-dark-2">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-red-dark-2</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-dark-2">-c-red-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bd-1-red-dark-2 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-dark-2">-bdc-red-dark-2</CodeBlock>
                                                </div>
                                                <div className="-bgc-red-dark-3">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-red-dark-3</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-dark-3">-c-red-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bd-1-red-dark-3 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-dark-3">-bdc-red-dark-3</CodeBlock>
                                                </div>
                                                <div className="-bgc-red-dark-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-white">-bgc-red-dark-4</CodeBlock>
                                                </div>
                                                <div className="">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-dark-4">-c-red-dark-4</CodeBlock>
                                                </div>
                                                <div className="-bd-1-red-dark-4 -m-b-4">
                                                    <CodeBlock className="-d-block -p-v-5 -p-l-5 -c-red-dark-4">-bdc-red-dark-4</CodeBlock>
                                                </div>
                                            </Section>
                                        </Accordion>
                                    </div>
                                </Accordion>
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
