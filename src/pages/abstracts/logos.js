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
                        <Card className="-m-t-7">
                            <Section className="-align-items-center -p-v-10 -p-h-10">
                            <img src="/gumgum_logo_color.svg" style={{ width: 250 }} />
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Dark Logo</Heading>
                        <Card className="-m-t-7 -bgc-dark-4">
                            <Section className="-align-items-center -p-v-10 -p-h-10">
                            <img src="/gumgum_logo_dark.svg" style={{ width: 250 }} />
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                    <Heading size="sm">Animated Logo</Heading>
                    <Card className="-m-t-7">
                        <Section className="-align-items-center -p-v-10 -p-h-10">
                        <img src="/gumgum_logo_ani.gif" style={{ width: 250 }} />
                        </Section>
                    </Card>
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
