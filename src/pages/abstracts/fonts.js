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
                <title>Typography | Pier Design System</title>
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading
                        breadcrumbs={breadcrumbs}
                        title="Typography"
                        lastUpdated="6/21/21"
                        description="This is  description for Pier's Typography"
                    ></PageHeading>

                    <Section>
                        <Heading size="sm">Primary Font</Heading>

                        <Card className="-m-t-7">
                            <Section>
                                <p className="pier-fonts">Mulish - Regular</p>
                                <p className="pier-fonts pier-fonts--bold">Mulish - Bold</p>
                                <p className="pier-fonts pier-fonts--extrabold">Mulish - Extra Bold</p>
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">CodeBlock Font</Heading>

                        <Card className="-m-t-7">
                            <Section>
                                <p className="pier-fonts--roboto">Roboto Mono - Regular</p>
                                <p className="pier-fonts--roboto pier-fonts--bold">Roboto Mono - Bold</p>
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Body Copy</Heading>
                        <CodeBlock size="sm">
                            Font-family: Mulish<br></br>
                            Weight: 400
                        </CodeBlock>
                        <Card className="-m-t-7">
                            <Section>
                                <BodyText size="md" className="pier-fonts">
                                    ABCDEFGHIJKLM<br></br>NOPQRSTUVWXYZ
                                </BodyText>
                                <BodyText size="md" className="pier-fonts">
                                    abcdefghijklm<br></br>nopqrstuvwxyz
                                </BodyText>
                                <BodyText size="md" className="pier-fonts">
                                    01234567890
                                </BodyText>
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
