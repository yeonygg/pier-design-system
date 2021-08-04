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
        { label: 'Colors', link: '', disabled: true },
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
                <title>Logos | Pier Design System</title>
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading
                        breadcrumbs={breadcrumbs}
                        title="Logos"
                        lastUpdated="6/21/21"
                        description="This is  description for Pier's Logos"
                    ></PageHeading>

                    <Section>
                        <Heading size="sm">Main Logo</Heading>
                        <div className="pier-colorbox pier-colorbox--card">
                            <Card className="-m-t-1" style={{ width: '100%', height: 200 }}>
                                <Section className="-d-flex -align-items-center -justify-content-center -p-l-9 -p-v-10">
                                    <img src="/gumgum_logo_color.svg" style={{ width: 250 }} />
                                </Section>
                            </Card>

                            <Card className="-m-t-1 -bgc-dark-4" style={{ width: '100%', height: 200 }}>
                                <Section className="-d-flex -align-items-center -justify-content-center -p-l-9 -p-v-10">
                                    <img src="/gumgum_logo_dark.svg" style={{ width: 250 }} />
                                </Section>
                            </Card>
                        </div>
                    </Section>

                    <Section>
                        <Heading size="sm">Animated Logo</Heading>
                        <Card className="-m-t-7" style={{ width: '100%' }}>
                            <Section></Section>
                            <Section className="-d-flex -align-items-center -justify-content-center -p-v-12 -p-l-9">
                                <img src="/gumgum_logo_ani.gif" style={{ width: 500 }} />
                            </Section>
                            <Section></Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Gumgum Logo Mark</Heading>
                        <div className="pier-colorbox pier-colorbox--card">
                            <Card className="-m-t-2 " style={{ width: '100%' }}>
                                <Section className="-d-flex -justify-content-center -p-v-11">
                                    <img src="/gg_logo.svg" style={{ width: 125 }} />
                                </Section>
                            </Card>

                            <Card className="-m-t-2  -bgc-dark-4" style={{ width: '100%' }}>
                                <Section className="-d-flex -justify-content-center -p-v-11">
                                    <img src="/gg_logo.svg" style={{ width: 125 }} />
                                </Section>
                            </Card>

                            <Card className="-m-t-2 gradient_bg" style={{ width: '100%' }}>
                                <Section className="-d-flex -justify-content-center -p-v-11">
                                    <img src="/gg_logo_white.svg" style={{ width: 125 }} />
                                </Section>
                            </Card>
                        </div>
                    </Section>

                    <Section>
                        <Heading size="sm">Pier Design System Logo</Heading>
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
