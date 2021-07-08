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
                        <Heading size="sm">Gradients</Heading>
                        <Card className="-m-b-0">
                            <Section className="-d-flex -flex-wrap">
                                <div className="-flex-column">
                                    <div className="pier-color-box--gradient-1 -m-r-4"></div>
                                    <div>
                                        <div className="-m-t-8">
                                            <Heading size="xs">
                                                Primary<br></br> Boulevard
                                            </Heading>
                                            <BodyText size="xs">
                                                Green<br></br> #08D18B
                                            </BodyText>
                                            <BodyText size="xs">
                                                Cyan<br></br> #25B9EF
                                            </BodyText>
                                        </div>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box--gradient-2 -m-r-4"></div>
                                    <div className="-m-t-8">
                                        <Heading size="xs">Deep Ocean</Heading>
                                        <BodyText size="xs">
                                            Blue<br></br> #176FB3
                                        </BodyText>
                                        <BodyText size="xs">
                                            Cyan<br></br> #25B9EF
                                        </BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box--gradient-3 -m-r-4"></div>
                                    <div className="-m-t-8">
                                        <Heading size="xs">Neon Sky</Heading>
                                        <BodyText size="xs">
                                            Cyan<br></br> #25B9EF
                                        </BodyText>
                                        <BodyText size="xs">
                                            Teal<br></br> #08D18B
                                        </BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box--gradient-4 -m-r-4"></div>
                                    <div className="-m-t-8">
                                        <Heading size="xs">Early Sunset</Heading>
                                        <BodyText size="xs">
                                            Red<br></br> #08D18B
                                        </BodyText>
                                        <BodyText size="xs">
                                            Orange<br></br> #25B9EF
                                        </BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box--gradient-5"></div>
                                    <div className="-m-t-8">
                                        <Heading size="xs">Fireside Glow</Heading>
                                        <BodyText size="xs">
                                            Orange<br></br> #08D18B
                                        </BodyText>
                                        <BodyText size="xs">
                                            Yellow<br></br> #25B9EF
                                        </BodyText>
                                    </div>
                                </div>
                            </Section>
                        </Card>
                    </Section>
                    <Section>
                        <Heading size="sm">Light Grays</Heading>
                        <Card className="-m-b-0">
                            <Section className="-d-flex -flex-wrap">
                                <div className="-flex-column">
                                    <div className="pier-color-box--border -bgc-white"></div>
                                    <div className="-m-t-8 -m-r-10">
                                        <Heading size="xs">White</Heading>
                                        <BodyText size="xs">#FFFFFF</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-light-4"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Light-4</Heading>
                                        <BodyText size="xs">#F7F8F8</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-light-3"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Light-3</Heading>
                                        <BodyText size="xs">#F1F3F3</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-light-2"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Light-2</Heading>
                                        <BodyText size="xs">#EBEEEF</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-light-1"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Light-1</Heading>
                                        <BodyText size="xs">#E3E7E8</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-gray-4"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Gray-4</Heading>
                                        <BodyText size="xs">#D0D6D8</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-gray-3"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Gray-3</Heading>
                                        <BodyText size="xs">#BCC5CA</BodyText>
                                    </div>
                                </div>
                            </Section>

                            <Section className="-d-flex"></Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Dark Grays</Heading>
                        <Card className="-m-b-0">
                            <Section className="-d-flex -flex-row -flex-wrap">
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-gray-2"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Gray-2</Heading>
                                        <BodyText size="xs">#A5B2B8</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-gray"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Gray</Heading>
                                        <BodyText size="xs">#8A9BA3</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-dark-1"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Dark-1</Heading>
                                        <BodyText size="xs">#6D808B</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-dark-2"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Dark-2</Heading>
                                        <BodyText size="xs">#53626D</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-dark-3"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Dark-3</Heading>
                                        <BodyText size="xs">#2D3A43</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-dark-4"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Dark-4</Heading>
                                        <BodyText size="xs">#0E1E2A</BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <div className="pier-color-box -bgc-black"></div>
                                    <div className="-m-t-8 -m-r-9">
                                        <Heading size="xs">Black</Heading>
                                        <BodyText size="xs">#000000</BodyText>
                                    </div>
                                </div>
                            </Section>

                            <Section className="-d-flex"></Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Primary</Heading>
                        <Card className="">
                            <Section className="-d-flex -flex-row -flex-wrap">
                                <div className="-d-flex -flex-column ">
                                    <div className="pier-color-box -bgc-cyan-light-4"></div>
                                    <div className="-m-t-8 -m-r-6">
                                        <Heading size="xs">Light-4</Heading>
                                        <BodyText size="xs">#DEF4FD</BodyText>
                                    </div>
                                </div>
                                <div className="-d-flex -flex-column">
                                    <div className="pier-color-box -bgc-cyan-light-3"></div>
                                    <div className="-m-t-8 -m-r-6">
                                        <Heading size="xs">Light-3</Heading>
                                        <BodyText size="xs">#A8E3F9</BodyText>
                                    </div>
                                </div>
                                <div className="-d-flex -flex-column">
                                    <div className="pier-color-box -bgc-cyan-light-2"></div>
                                    <div className="-m-t-8 -m-r-6">
                                        <Heading size="xs">Light-2</Heading>
                                        <BodyText size="xs">#71D1F5</BodyText>
                                    </div>
                                </div>
                                <div className="-d-flex -flex-column">
                                    <div className="pier-color-box -bgc-cyan-light-1"></div>
                                    <div className="-m-t-8 -m-r-6">
                                        <Heading size="xs">Light-1</Heading>
                                        <BodyText size="xs">#46C3F1</BodyText>
                                    </div>
                                </div>
                                <div className="-d-flex -flex-column">
                                    <div className="pier-color-box -bgc-cyan"></div>
                                    <div className="-m-t-8 -m-r-6">
                                        <Heading size="xs">Cyan</Heading>
                                        <BodyText size="xs">#25B9EF</BodyText>
                                    </div>
                                </div>
                                <div className="-d-flex -flex-column">
                                    <div className="pier-color-box -bgc-cyan-dark-1"></div>
                                    <div className="-m-t-8 -m-r-6">
                                        <Heading size="xs">Dark-1</Heading>
                                        <BodyText size="xs">#1BA2D5</BodyText>
                                    </div>
                                </div>
                                <div className="-d-flex -flex-column">
                                    <div className="pier-color-box -bgc-cyan-dark-2"></div>
                                    <div className="-m-t-8 -m-r-6">
                                        <Heading size="xs">Dark-2</Heading>
                                        <BodyText size="xs">#1481AD</BodyText>
                                    </div>
                                </div>
                                <div className="-d-flex -flex-column">
                                    <div className="pier-color-box -bgc-cyan-dark-3"></div>
                                    <div className="-m-t-8 -m-r-6">
                                        <Heading size="xs">Dark-3</Heading>
                                        <BodyText size="xs">#0D6185</BodyText>
                                    </div>
                                </div>
                                <div className="-d-flex -flex-column">
                                    <div className="pier-color-box -bgc-cyan-dark-4"></div>
                                    <div className="-m-t-8 -m-r-6">
                                        <Heading size="xs">Dark-4</Heading>
                                        <BodyText size="xs">#07405E</BodyText>
                                    </div>
                                </div>
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Green</Heading>
                        <Card className="-m-b-0">
                            <Section className="-d-flex -flex-row -flex-wrap">
                                <div className="pier-color-box -bgc-green-light-4">
                                    <div className="-d-flex -justify-content-between -align-items-center -p-h-8 -p-t-4">
                                        <Heading className="-float-left" size="xs">
                                            Light-4
                                        </Heading>
                                        <BodyText className="-float-right" size="xs">
                                            #DAF8EE
                                        </BodyText>
                                    </div>
                                </div>
                                <div className="pier-color-box -bgc-green-light-3">
                                    <div className="-d-flex -justify-content-between -align-items-center -p-h-8 -p-t-4">
                                        <Heading size="xs">Light-3</Heading>
                                        <BodyText size="xs">#9CEDD1</BodyText>
                                    </div>
                                </div>

                                <div className="pier-color-box -bgc-green-light-2">
                                    <div className="-d-flex -justify-content-between -align-items-center -p-h-8 -p-t-4">
                                        <Heading size="xs">Light-2</Heading>
                                        <BodyText size="xs">#5EE1B4</BodyText>
                                    </div>
                                </div>
                                <div className="pier-color-box -bgc-green-light-1">
                                <div className="-d-flex -justify-content-between -align-items-center -p-h-8 -p-t-4">
                                <Heading size="xs">Light-1</Heading>
                                <BodyText size="xs">#2DD89C</BodyText>
                                </div>
                                </div>
                                <div className="pier-color-box -bgc-green">
                                <div className="-d-flex -justify-content-between -align-items-center -p-h-8 -p-t-4">
                                <Heading className="-c-white" size="xs">Green</Heading>
                                <BodyText className="-c-white" size="xs">#08D18B</BodyText>
                                </div>
                                </div>
                                <div className="pier-color-box -bgc-green-dark-1">
                                <div className="-d-flex -justify-content-between -align-items-center -p-h-8 -p-t-4">
                                <Heading className="-c-white" size="xs">Dark-1</Heading>
                                <BodyText className="-c-white" size="xs">#05B67A</BodyText>
                                </div>
                                </div>
                                <div className="pier-color-box -bgc-green-dark-2">
                                <div className="-d-flex -justify-content-between -align-items-center -p-h-8 -p-t-4">
                                <Heading className="-c-white" size="xs">Dark-2</Heading>
                                <BodyText className="-c-white" size="xs">#039162</BodyText>
                                </div>
                                </div>
                                <div className="pier-color-box -bgc-green-dark-3">
                                <div className="-d-flex -justify-content-between -align-items-center -p-h-8 -p-t-4">
                                <Heading className="-c-white" size="xs">Dark-3</Heading>
                                <BodyText className="-c-white" size="xs">#026D4B</BodyText>
                                </div>
                                </div>
                                
                                <div className="pier-color-box -bgc-green-dark-4">
                                <div className="-d-flex -justify-content-between -align-items-center -p-h-8 -p-t-4">
                                <Heading className="-c-white" size="xs">Dark-4</Heading>
                                <BodyText className="-c-white" size="xs">#014834</BodyText>
                                </div>
                                </div>
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Blue</Heading>
                        <Card className="-m-b-0">
                            <Section className="-d-flex">
                                <div className="pier-color-box -bgc-blue-light-4"></div>
                                <div className="pier-color-box -bgc-blue-light-3"></div>
                                <div className="pier-color-box -bgc-blue-light-2"></div>
                                <div className="pier-color-box -bgc-blue-light-1"></div>
                                <div className="pier-color-box -bgc-blue"></div>
                                <div className="pier-color-box -bgc-blue-dark-1"></div>
                                <div className="pier-color-box -bgc-blue-dark-2"></div>
                                <div className="pier-color-box -bgc-blue-dark-3"></div>
                                <div className="pier-color-box -bgc-blue-dark-4"></div>
                            </Section>

                            <Section className="-d-flex">
                                <div className="-m-t-8">
                                    <Heading size="xs">Light-4</Heading>
                                    <BodyText size="xs">#DCE9F4</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-3</Heading>
                                    <BodyText size="xs">#A2C5E0</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-2</Heading>
                                    <BodyText size="xs">#68A1CE</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-1</Heading>
                                    <BodyText size="xs">#3A84BE</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Blue</Heading>
                                    <BodyText size="xs">#176FB3</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-1</Heading>
                                    <BodyText size="xs">#0F62A3</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-2</Heading>
                                    <BodyText size="xs">#0A4E86</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-3</Heading>
                                    <BodyText size="xs">#053B68</BodyText>
                                </div>

                                <div className="">
                                    <Heading size="xs">Dark-4</Heading>
                                    <BodyText size="xs">#02274B</BodyText>
                                </div>
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Teal</Heading>
                        <Card className="-m-b-0">
                            <Section className="-d-flex">
                                <div className="pier-color-box -bgc-teal-light-4"></div>
                                <div className="pier-color-box -bgc-teal-light-3"></div>
                                <div className="pier-color-box -bgc-teal-light-2"></div>
                                <div className="pier-color-box -bgc-teal-light-1"></div>
                                <div className="pier-color-box -bgc-teal"></div>
                                <div className="pier-color-box -bgc-teal-dark-1"></div>
                                <div className="pier-color-box -bgc-teal-dark-2"></div>
                                <div className="pier-color-box -bgc-teal-dark-3"></div>
                                <div className="pier-color-box -bgc-teal-dark-4"></div>
                            </Section>

                            <Section className="-d-flex">
                                <div className="-m-t-8">
                                    <Heading size="xs">Light-4</Heading>
                                    <BodyText size="xs">#DAF8EE</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-3</Heading>
                                    <BodyText size="xs">#9CEDD1</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-2</Heading>
                                    <BodyText size="xs">#5EE1B4</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-1</Heading>
                                    <BodyText size="xs">#2DD89C</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Teal</Heading>
                                    <BodyText size="xs">#08D18B</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-1</Heading>
                                    <BodyText size="xs">#05B67A</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-2</Heading>
                                    <BodyText size="xs">#039162</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-3</Heading>
                                    <BodyText size="xs">#026D4B</BodyText>
                                </div>

                                <div className="">
                                    <Heading size="xs">Dark-4</Heading>
                                    <BodyText size="xs">#014834</BodyText>
                                </div>
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Yellow</Heading>
                        <Card className="-m-b-0">
                            <Section className="-d-flex">
                                <div className="pier-color-box -bgc-yellow-light-4"></div>
                                <div className="pier-color-box -bgc-yellow-light-3"></div>
                                <div className="pier-color-box -bgc-yellow-light-2"></div>
                                <div className="pier-color-box -bgc-yellow-light-1"></div>
                                <div className="pier-color-box -bgc-yellow"></div>
                                <div className="pier-color-box -bgc-yellow-dark-1"></div>
                                <div className="pier-color-box -bgc-yellow-dark-2"></div>
                                <div className="pier-color-box -bgc-yellow-dark-3"></div>
                                <div className="pier-color-box -bgc-yellow-dark-4"></div>
                            </Section>

                            <Section className="-d-flex">
                                <div className="-m-t-8">
                                    <Heading size="xs">Light-4</Heading>
                                    <BodyText size="xs">#DCE9F4</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-3</Heading>
                                    <BodyText size="xs">#A2C5E0</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-2</Heading>
                                    <BodyText size="xs">#68A1CE</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-1</Heading>
                                    <BodyText size="xs">#3A84BE</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Yellow</Heading>
                                    <BodyText size="xs">#176FB3</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-1</Heading>
                                    <BodyText size="xs">#0F62A3</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-2</Heading>
                                    <BodyText size="xs">#0A4E86</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-3</Heading>
                                    <BodyText size="xs">#053B68</BodyText>
                                </div>

                                <div className="">
                                    <Heading size="xs">Dark-4</Heading>
                                    <BodyText size="xs">#02274B</BodyText>
                                </div>
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Orange</Heading>
                        <Card className="-m-b-0">
                            <Section className="-d-flex">
                                <div className="pier-color-box -bgc-orange-light-4"></div>
                                <div className="pier-color-box -bgc-orange-light-3"></div>
                                <div className="pier-color-box -bgc-orange-light-2"></div>
                                <div className="pier-color-box -bgc-orange-light-1"></div>
                                <div className="pier-color-box -bgc-orange"></div>
                                <div className="pier-color-box -bgc-orange-dark-1"></div>
                                <div className="pier-color-box -bgc-orange-dark-2"></div>
                                <div className="pier-color-box -bgc-orange-dark-3"></div>
                                <div className="pier-color-box -bgc-orange-dark-4"></div>
                            </Section>

                            <Section className="-d-flex">
                                <div className="-m-t-8">
                                    <Heading size="xs">Light-4</Heading>
                                    <BodyText size="xs">#DCE9F4</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-3</Heading>
                                    <BodyText size="xs">#A2C5E0</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-2</Heading>
                                    <BodyText size="xs">#68A1CE</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-1</Heading>
                                    <BodyText size="xs">#3A84BE</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Orange</Heading>
                                    <BodyText size="xs">#176FB3</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-1</Heading>
                                    <BodyText size="xs">#0F62A3</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-2</Heading>
                                    <BodyText size="xs">#0A4E86</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-3</Heading>
                                    <BodyText size="xs">#053B68</BodyText>
                                </div>

                                <div className="">
                                    <Heading size="xs">Dark-4</Heading>
                                    <BodyText size="xs">#02274B</BodyText>
                                </div>
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Red</Heading>
                        <Card className="-m-b-0">
                            <Section className="-d-flex">
                                <div className="pier-color-box -bgc-red-light-4"></div>
                                <div className="pier-color-box -bgc-red-light-3"></div>
                                <div className="pier-color-box -bgc-red-light-2"></div>
                                <div className="pier-color-box -bgc-red-light-1"></div>
                                <div className="pier-color-box -bgc-red"></div>
                                <div className="pier-color-box -bgc-red-dark-1"></div>
                                <div className="pier-color-box -bgc-red-dark-2"></div>
                                <div className="pier-color-box -bgc-red-dark-3"></div>
                                <div className="pier-color-box -bgc-red-dark-4"></div>
                            </Section>

                            <Section className="-d-flex">
                                <div className="-m-t-8">
                                    <Heading size="xs">Light-4</Heading>
                                    <BodyText size="xs">#DCE9F4</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-3</Heading>
                                    <BodyText size="xs">#A2C5E0</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-2</Heading>
                                    <BodyText size="xs">#68A1CE</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Light-1</Heading>
                                    <BodyText size="xs">#3A84BE</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Red</Heading>
                                    <BodyText size="xs">#176FB3</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-1</Heading>
                                    <BodyText size="xs">#0F62A3</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-2</Heading>
                                    <BodyText size="xs">#0A4E86</BodyText>
                                </div>

                                <div className="-m-t-8">
                                    <Heading size="xs">Dark-3</Heading>
                                    <BodyText size="xs">#053B68</BodyText>
                                </div>

                                <div className="">
                                    <Heading size="xs">Dark-4</Heading>
                                    <BodyText size="xs">#02274B</BodyText>
                                </div>
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
