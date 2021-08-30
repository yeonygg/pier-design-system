import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from 'src/pages-components/Layout';
import { Fragment } from 'react';
import API from 'src/documentation/API';
import Heading from 'src/pier-design-system/components/text/Heading';
import CodeBlock from 'src/pier-design-system/components/text/CodeBlock';
import Section from 'src/pier-design-system/components/containers/Section';
import Card from 'src/pier-design-system/components/containers/Card';
import Well from 'src/pier-design-system/components/containers/Well';
import PageHeading from 'src/pages-components/PageHeading';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/esm/parser-html';
import Accordion from 'src/pier-design-system/components/accordion/Accordion';
import BodyContent from 'src/pages-components/BodyContent';
import BodyText from 'src/pier-design-system/components/text/BodyText';

export default function LayoutPage({ appData }) {
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Abstracts', link: '', disabled: false },
        { label: 'Fonts', link: '', disabled: true },
    ];

    function prettierHTMLFormat(html) {
        return prettier.format(html, {
            parser: 'html',
            plugins: [parserHtml],
            tabWidth: 4,
        });
    }

    return (
        <Fragment>
            <Head>
                <title>Fonts | Pier Design System</title>
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading
                        breadcrumbs={breadcrumbs}
                        title="Fonts/Icons"
                        lastUpdated="6/21/21"
                        description="This is  description for Pier's Fonts"
                    ></PageHeading>

                    <Section>
                        <Heading size="sm">Primary Font</Heading>

                        <Well className="-m-v-7">
                            <Section>
                                <p className="pier-fonts">Mulish - Regular</p>
                                <p className="pier-fonts pier-fonts--bold">Mulish - Bold</p>
                                <p className="pier-fonts pier-fonts--extrabold">Mulish - Extra Bold</p>
                            </Section>
                        </Well>
                        <a className="pier-link" href="https://fonts.google.com/specimen/Mulish?query=muli" target="_blank">
                            Download from Google Fonts
                        </a>
                    </Section>

                    <Section>
                        <Heading size="sm">CodeBlock Font</Heading>

                        <Well className="-m-v-7">
                            <Section>
                                <p className="pier-fonts--roboto">Roboto Mono - Regular</p>
                                <p className="pier-fonts--roboto pier-fonts--bold">Roboto Mono - Bold</p>
                            </Section>
                        </Well>
                        <a className="pier-link" href="https://fonts.google.com/specimen/Roboto+Mono?query=robot" target="_blank">
                            Download from Google Fonts
                        </a>
                    </Section>

                    <Section>
                        <Heading size="sm">Font Awesome</Heading>

                        <Well className="-m-v-7">
                            <Section>
                                <p className="pier-fonts--roboto">
                                    <i class="fas fa-atom -p-r-6"></i>
                                    <i class="fas fa-chevron-up -p-r-6"></i>
                                    <i class="fas fa-chevron-down -p-r-6"></i>
                                    <i class="fas fa-chevron-right -p-r-6"></i>
                                    <i class="fas fa-chevron-left -p-r-6"></i>
                                    <i class="fas fa-tools -p-r-6"></i>
                                    <i class="fas fa-check -p-r-6"></i>
                                    <i class="fas fa-info-circle -p-r-6"></i>
                                    <i class="far fa-code -p-r-6"></i>
                                    <i class="fas fa-exclamation-circle  -p-r-6"></i>
                                    <i class="fas fa-pen -p-r-6"></i>
                                    <i class="fas fa-copy -p-r-6"></i>
                                    <i class="far fa-times -p-r-6"></i>
                                    <i class="fas fa-bread-slice -p-r-6"></i>
                                    <i class="fas fa-bell -p-r-6"></i>
                                    <i class="fas fa-question-circle -p-r-6"></i>
                                    <i class="fas fa-lock -p-r-6"></i>
                                    <i class="far fa-file-download -p-r-6"></i>
                                    <i class="fas fa-play -p-r-6"></i>
                                    <i class="fas fa-undo-alt"></i>
                                </p>
                            </Section>
                        </Well>
                        <a className="pier-link" href="https://fontawesome.com/" target="_blank">
                            Download from Font Awesome
                        </a>
                    </Section>
                </BodyContent>
            </Layout>
        </Fragment>
    );
}

LayoutPage.propTypes = {
    appData: PropTypes.object,
};

export async function getStaticProps() {
    return {
        props: {
            appData: API,
        },
    };
}
