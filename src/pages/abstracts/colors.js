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
                <title>Colors | Pier Design System</title>
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading
                        breadcrumbs={breadcrumbs}
                        title="Colors"
                        lastUpdated="6/21/21"
                        description="This is  description for Pier's colors"
                    ></PageHeading>
                    <Section>
                        <Heading size="sm">Grays</Heading>
                        <Card className="-m-b-0 -br-b-0">
                            <Section className="-d-flex">
                            <div className="pier-color-box -bgc-blue-dark-2"></div>
                            <Heading className="-m-l-4 -c-gray-3" size="xs">Gray Light-4</Heading><br></br>
                            <BodyText size="sm" className="-m-l-4"> HEX #F7F8F8
                        </BodyText>
                            </Section>
                        </Card>
                        <Well className="-m-b-0 -br-t-0" style={{ marginTop: '-1px' }}>
                            <Accordion title="HTML markup" icon="far fa-code" inCard size="xs" className="-m-b-0">
                                <Section>
                                    <CodeBlock size="xs">
                                        {prettierHTMLFormat(
                                            ``
                                        )}
                                    </CodeBlock>
                                </Section>
                            </Accordion>
                        </Well>
                    </Section>
                    <Section>
                        <Heading size="sm">Responsive Classes</Heading>
                        <Card className="-m-b-0 -br-b-0">
                            <Section>
                                <div className="pier-container">
                                    <div className="pier-row">
                                        <div className="pier-column pier-column--md-8 -p-a-2 -bd-1-gray">--md-8</div>
                                        <div className="pier-column pier-column--md-4 -p-a-2 -bd-1-gray">--md-4</div>
                                    </div>
                                    <div className="pier-row">
                                        <div className="pier-column pier-column--12 pier-column--md-6 -p-a-2 -bd-1-gray">--12 & --md-6</div>
                                        <div className="pier-column pier-column--12 pier-column--md-6 -p-a-2 -bd-1-gray">--12 & --md-6</div>
                                    </div>
                                </div>
                            </Section>
                        </Card>
                        <Well className="-m-b-0 -br-t-0" style={{ marginTop: '-1px' }}>
                            <Accordion title="HTML markup" icon="far fa-code" inCard size="xs" className="-m-b-0">
                                <Section>
                                    <CodeBlock size="xs">
                                        {prettierHTMLFormat(
                                            `<div class='pier-container'>
<div class='pier-row'>
<div class='pier-column pier-column--md-8'>--md-8</div>
<div class='pier-column pier-column--md-4'>--md-4</div>
</div>
<div class='pier-row'>
<div class='pier-column pier-column--12 pier-column--md-6'>--12 & --md-6</div>
<div class='pier-column pier-column--12 pier-column--md-6'>--12 & --md-6</div>
</div>
</div>`
                                        )}
                                    </CodeBlock>
                                </Section>
                            </Accordion>
                        </Well>
                    </Section>
                    <Section>
                        <Heading size="sm">Offset</Heading>
                        <Card className="-m-b-0 -br-b-0">
                            <Section>
                                <div className="pier-container">
                                    <div className="pier-row">
                                        <div className="pier-column pier-column--3 -p-a-2 -bd-1-gray">--3</div>
                                        <div className="pier-column pier-column--4 pier-column--offset-4 -p-a-2 -bd-1-gray">--4 & --offset-3</div>
                                    </div>
                                    <div className="pier-row">
                                        <div className="pier-column pier-column--3 pier-column--offset-2 -p-a-2 -bd-1-gray">--1 & --offset-2</div>
                                        <div className="pier-column pier-column--6 pier-column--offset-1 -p-a-2 -bd-1-gray">--3 & --offset-1</div>
                                    </div>
                                    <div className="pier-row">
                                        <div className="pier-column pier-column--12 pier-column--md-4 pier-column--offset-md-1 -p-a-2 -bd-1-gray">
                                            --12, --md-4, & --offset-md-1
                                        </div>
                                        <div className="pier-column pier-column--12 pier-column--md-5 pier-column--offset-md-2 -p-a-2 -bd-1-gray">
                                            --12, --md-3, & --offset-md-2
                                        </div>
                                    </div>
                                </div>
                            </Section>
                        </Card>
                        <Well className="-m-b-0 -br-t-0" style={{ marginTop: '-1px' }}>
                            <Accordion title="HTML markup" icon="far fa-code" inCard size="xs" className="-m-b-0">
                                <Section>
                                    <CodeBlock size="xs">
                                        {prettierHTMLFormat(
                                            `<div class='pier-container'>
<div class='pier-row'>
<div class='pier-column pier-column--3'>--3</div>
<div class='pier-column pier-column--4 pier-column--offset-4'>--4 & --offset-3</div>
</div>
<div class='pier-row'>
<div class='pier-column pier-column--3 pier-column--offset-2'>--1 & --offset-2</div>
<div class='pier-column pier-column--6 pier-column--offset-1'>--3 & --offset-1</div>
</div>
<div class='pier-row'>
<div class='pier-column pier-column--12 pier-column--md-4 pier-column--offset-md-1'>--12, --md-4, & --offset-md-1</div>
<div class='pier-column pier-column--12 pier-column--md-5 pier-column--offset-md-2'>--12, --md-3, & --offset-md-2</div>
</div>
</div>`
                                        )}
                                    </CodeBlock>
                                </Section>
                            </Accordion>
                        </Well>
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
