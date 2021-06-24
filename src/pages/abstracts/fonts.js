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
                <title>Fonts | Pier Design System</title>
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading
                        breadcrumbs={breadcrumbs}
                        title="Fonts"
                        lastUpdated="6/21/21"
                        description="This is  description for Pier's fonts"
                    ></PageHeading>


                <Section>
                <Heading size="sm">Mulish Regular</Heading>
                <BodyText size="sm">For body copy</BodyText>
                <Card className="-m-b-0">
                <Section>
                    <BodyText className="pier-fonts">ABCDEFGHIJKLM<br></br>NOPQRSTUVWXYZ</BodyText>
                    abcdefghijklm<br></br>nopqrstuvwxyz<br></br>01234567890
                </Section>
                    <Section className="-d-flex">
                        
                    </Section>
                </Card>
            </Section>
                    <Section>
                        <Heading size="sm">Light Grays</Heading>
                        <Card className="-m-b-0">
                            <Section className="-d-flex">
                            <div className="pier-color-box--border -bgc-white"></div>
                            <div className="pier-color-box -bgc-light-4"></div>
                            <div className="pier-color-box -bgc-light-3"></div>
                            <div className="pier-color-box -bgc-light-2"></div>
                            <div className="pier-color-box -bgc-light-1"></div>
                            <div className="pier-color-box -bgc-gray-4"></div>
                            <div className="pier-color-box -bgc-gray-3"></div>

                            </Section>

                            <Section className="-d-flex">
                            <div className="-m-r-9">
                                <Heading size="xs">White</Heading>
                                <BodyText size="xs">HEX<br></br> #FFFFFF</BodyText>
                                </div>

                                <div className="-m-r-9">
                                <Heading size="xs">Light-4</Heading>
                                <BodyText size="xs">HEX<br></br> #F7F8F8</BodyText>
                                </div>

                                <div className="-m-r-9">
                                <Heading size="xs">Light-3</Heading>
                                <BodyText size="xs">HEX<br></br> #F1F3F3</BodyText>
                                </div>

                                <div className="-m-r-9">
                                <Heading size="xs">Light-2</Heading>
                                <BodyText size="xs">HEX<br></br> #EBEEEF</BodyText>
                                </div>

                                <div className="-m-r-9">
                                <Heading size="xs">Light-1</Heading>
                                <BodyText size="xs">HEX<br></br> #E3E7E8</BodyText>
                                </div>

                                <div className="-m-r-9">
                                <Heading size="xs">Gray-4</Heading>
                                <BodyText size="xs">HEX<br></br> #D0D6D8</BodyText>
                                </div>

                                <div className="-m-r-9">
                                <Heading size="xs">Gray-3</Heading>
                                <BodyText size="xs">HEX<br></br> #BCC5CA</BodyText>
                                </div>
                                
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                    <Heading size="sm">Dark Grays</Heading>
                    <Card className="-m-b-0">
                        <Section className="-d-flex">
                        <div className="pier-color-box -bgc-gray-2"></div>
                        <div className="pier-color-box -bgc-gray"></div>
                        <div className="pier-color-box -bgc-dark-1"></div>
                        <div className="pier-color-box -bgc-dark-2"></div>
                        <div className="pier-color-box -bgc-dark-3"></div>
                        <div className="pier-color-box -bgc-dark-4"></div>
                        <div className="pier-color-box -bgc-black"></div>

                        </Section>

                        <Section className="-d-flex">
                        <div className="-m-r-9">
                            <Heading size="xs">Gray-2</Heading>
                            <BodyText size="xs">HEX<br></br> #A5B2B8</BodyText>
                            </div>

                            <div className="-m-r-9">
                            <Heading size="xs">Gray</Heading>
                            <BodyText size="xs">HEX<br></br> #8A9BA3</BodyText>
                            </div>

                            <div className="-m-r-9">
                            <Heading size="xs">Dark-1</Heading>
                            <BodyText size="xs">HEX<br></br> #6D808B</BodyText>
                            </div>

                            <div className="-m-r-9">
                            <Heading size="xs">Dark-2</Heading>
                            <BodyText size="xs">HEX<br></br> #53626D</BodyText>
                            </div>

                            <div className="-m-r-9">
                            <Heading size="xs">Dark-3</Heading>
                            <BodyText size="xs">HEX<br></br> #2D3A43</BodyText>
                            </div>

                            <div className="-m-r-9">
                            <Heading size="xs">Dark-4</Heading>
                            <BodyText size="xs">HEX<br></br> #0E1E2A</BodyText>
                            </div>

                            <div className="-m-r-9">
                            <Heading size="xs">Black</Heading>
                            <BodyText size="xs">HEX<br></br> #000000</BodyText>
                            </div>
                            
                        </Section>
                    </Card>
                </Section>

                <Section>
                <Heading size="sm">Primary</Heading>
                <Card className="-m-b-0">
                    <Section className="-d-flex">
                    <div className="pier-color-box -bgc-cyan-light-4"></div>
                    <div className="pier-color-box -bgc-cyan-light-3"></div>
                    <div className="pier-color-box -bgc-cyan-light-2"></div>
                    <div className="pier-color-box -bgc-cyan-light-1"></div>
                    <div className="pier-color-box -bgc-cyan"></div>
                    <div className="pier-color-box -bgc-cyan-dark-1"></div>
                    <div className="pier-color-box -bgc-cyan-dark-2"></div>
                    <div className="pier-color-box -bgc-cyan-dark-3"></div>
                    <div className="pier-color-box -bgc-cyan-dark-4"></div>

                    </Section>

                    <Section className="-d-flex">
                    <div className="-m-r-7">
                        <Heading size="xs">Light-4</Heading>
                        <BodyText size="xs">HEX<br></br> #DEF4FD</BodyText>
                        </div>

                        <div className="-m-r-7">
                        <Heading size="xs">Light-3</Heading>
                        <BodyText size="xs">HEX<br></br> #A8E3F9</BodyText>
                        </div>

                        <div className="-m-r-7">
                        <Heading size="xs">Light-2</Heading>
                        <BodyText size="xs">HEX<br></br> #71D1F5</BodyText>
                        </div>

                        <div className="-m-r-7">
                        <Heading size="xs">Light-1</Heading>
                        <BodyText size="xs">HEX<br></br> #46C3F1</BodyText>
                        </div>

                        <div className="-m-r-7">
                        <Heading size="xs">Cyan</Heading>
                        <BodyText size="xs">HEX<br></br> #25B9EF</BodyText>
                        </div>

                        <div className="-m-r-7">
                        <Heading size="xs">Dark-1</Heading>
                        <BodyText size="xs">HEX<br></br> #1BA2D5</BodyText>
                        </div>

                        <div className="-m-r-7">
                        <Heading size="xs">Dark-2</Heading>
                        <BodyText size="xs">HEX<br></br> #1481AD</BodyText>
                        </div>

                        <div className="-m-r-7">
                        <Heading size="xs">Dark-3</Heading>
                        <BodyText size="xs">HEX<br></br> #0D6185</BodyText>
                        </div>

                        <div className="">
                        <Heading size="xs">Dark-4</Heading>
                        <BodyText size="xs">HEX<br></br> #07405E</BodyText>
                        </div>
                        
                    </Section>
                </Card>
            </Section>

            <Section>
            <Heading size="sm">Green</Heading>
            <Card className="-m-b-0">
                <Section className="-d-flex">
                <div className="pier-color-box -bgc-green-light-4"></div>
                <div className="pier-color-box -bgc-green-light-3"></div>
                <div className="pier-color-box -bgc-green-light-2"></div>
                <div className="pier-color-box -bgc-green-light-1"></div>
                <div className="pier-color-box -bgc-green"></div>
                <div className="pier-color-box -bgc-green-dark-1"></div>
                <div className="pier-color-box -bgc-green-dark-2"></div>
                <div className="pier-color-box -bgc-green-dark-3"></div>
                <div className="pier-color-box -bgc-green-dark-4"></div>

                </Section>

                <Section className="-d-flex">
                <div className="-m-r-7">
                    <Heading size="xs">Light-4</Heading>
                    <BodyText size="xs">HEX<br></br> #DAF8EE</BodyText>
                    </div>

                    <div className="-m-r-7">
                    <Heading size="xs">Light-3</Heading>
                    <BodyText size="xs">HEX<br></br> #9CEDD1</BodyText>
                    </div>

                    <div className="-m-r-7">
                    <Heading size="xs">Light-2</Heading>
                    <BodyText size="xs">HEX<br></br> #5EE1B4</BodyText>
                    </div>

                    <div className="-m-r-7">
                    <Heading size="xs">Light-1</Heading>
                    <BodyText size="xs">HEX<br></br> #2DD89C</BodyText>
                    </div>

                    <div className="-m-r-7">
                    <Heading size="xs">Green</Heading>
                    <BodyText size="xs">HEX<br></br> #08D18B</BodyText>
                    </div>

                    <div className="-m-r-7">
                    <Heading size="xs">Dark-1</Heading>
                    <BodyText size="xs">HEX<br></br> #05B67A</BodyText>
                    </div>

                    <div className="-m-r-7">
                    <Heading size="xs">Dark-2</Heading>
                    <BodyText size="xs">HEX<br></br> #039162</BodyText>
                    </div>

                    <div className="-m-r-7">
                    <Heading size="xs">Dark-3</Heading>
                    <BodyText size="xs">HEX<br></br> #026D4B</BodyText>
                    </div>

                    <div className="">
                    <Heading size="xs">Dark-4</Heading>
                    <BodyText size="xs">HEX<br></br> #014834</BodyText>
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
            <div className="-m-r-7">
                <Heading size="xs">Light-4</Heading>
                <BodyText size="xs">HEX<br></br> #DCE9F4</BodyText>
                </div>

                <div className="-m-r-7">
                <Heading size="xs">Light-3</Heading>
                <BodyText size="xs">HEX<br></br> #A2C5E0</BodyText>
                </div>

                <div className="-m-r-7">
                <Heading size="xs">Light-2</Heading>
                <BodyText size="xs">HEX<br></br> #68A1CE</BodyText>
                </div>

                <div className="-m-r-7">
                <Heading size="xs">Light-1</Heading>
                <BodyText size="xs">HEX<br></br> #3A84BE</BodyText>
                </div>

                <div className="-m-r-7">
                <Heading size="xs">Blue</Heading>
                <BodyText size="xs">HEX<br></br> #176FB3</BodyText>
                </div>

                <div className="-m-r-7">
                <Heading size="xs">Dark-1</Heading>
                <BodyText size="xs">HEX<br></br> #0F62A3</BodyText>
                </div>

                <div className="-m-r-7">
                <Heading size="xs">Dark-2</Heading>
                <BodyText size="xs">HEX<br></br> #0A4E86</BodyText>
                </div>

                <div className="-m-r-7">
                <Heading size="xs">Dark-3</Heading>
                <BodyText size="xs">HEX<br></br> #053B68</BodyText>
                </div>

                <div className="">
                <Heading size="xs">Dark-4</Heading>
                <BodyText size="xs">HEX<br></br> #02274B</BodyText>
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
        <div className="-m-r-7">
            <Heading size="xs">Light-4</Heading>
            <BodyText size="xs">HEX<br></br> #DAF8EE</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Light-3</Heading>
            <BodyText size="xs">HEX<br></br> #9CEDD1</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Light-2</Heading>
            <BodyText size="xs">HEX<br></br> #5EE1B4</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Light-1</Heading>
            <BodyText size="xs">HEX<br></br> #2DD89C</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Teal</Heading>
            <BodyText size="xs">HEX<br></br> #08D18B</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Dark-1</Heading>
            <BodyText size="xs">HEX<br></br> #05B67A</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Dark-2</Heading>
            <BodyText size="xs">HEX<br></br> #039162</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Dark-3</Heading>
            <BodyText size="xs">HEX<br></br> #026D4B</BodyText>
            </div>

            <div className="">
            <Heading size="xs">Dark-4</Heading>
            <BodyText size="xs">HEX<br></br> #014834</BodyText>
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
        <div className="-m-r-7">
            <Heading size="xs">Light-4</Heading>
            <BodyText size="xs">HEX<br></br> #DCE9F4</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Light-3</Heading>
            <BodyText size="xs">HEX<br></br> #A2C5E0</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Light-2</Heading>
            <BodyText size="xs">HEX<br></br> #68A1CE</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Light-1</Heading>
            <BodyText size="xs">HEX<br></br> #3A84BE</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Yellow</Heading>
            <BodyText size="xs">HEX<br></br> #176FB3</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Dark-1</Heading>
            <BodyText size="xs">HEX<br></br> #0F62A3</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Dark-2</Heading>
            <BodyText size="xs">HEX<br></br> #0A4E86</BodyText>
            </div>

            <div className="-m-r-7">
            <Heading size="xs">Dark-3</Heading>
            <BodyText size="xs">HEX<br></br> #053B68</BodyText>
            </div>

            <div className="">
            <Heading size="xs">Dark-4</Heading>
            <BodyText size="xs">HEX<br></br> #02274B</BodyText>
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
    <div className="-m-r-7">
        <Heading size="xs">Light-4</Heading>
        <BodyText size="xs">HEX<br></br> #DCE9F4</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Light-3</Heading>
        <BodyText size="xs">HEX<br></br> #A2C5E0</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Light-2</Heading>
        <BodyText size="xs">HEX<br></br> #68A1CE</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Light-1</Heading>
        <BodyText size="xs">HEX<br></br> #3A84BE</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Orange</Heading>
        <BodyText size="xs">HEX<br></br> #176FB3</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Dark-1</Heading>
        <BodyText size="xs">HEX<br></br> #0F62A3</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Dark-2</Heading>
        <BodyText size="xs">HEX<br></br> #0A4E86</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Dark-3</Heading>
        <BodyText size="xs">HEX<br></br> #053B68</BodyText>
        </div>

        <div className="">
        <Heading size="xs">Dark-4</Heading>
        <BodyText size="xs">HEX<br></br> #02274B</BodyText>
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
    <div className="-m-r-7">
        <Heading size="xs">Light-4</Heading>
        <BodyText size="xs">HEX<br></br> #DCE9F4</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Light-3</Heading>
        <BodyText size="xs">HEX<br></br> #A2C5E0</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Light-2</Heading>
        <BodyText size="xs">HEX<br></br> #68A1CE</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Light-1</Heading>
        <BodyText size="xs">HEX<br></br> #3A84BE</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Red</Heading>
        <BodyText size="xs">HEX<br></br> #176FB3</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Dark-1</Heading>
        <BodyText size="xs">HEX<br></br> #0F62A3</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Dark-2</Heading>
        <BodyText size="xs">HEX<br></br> #0A4E86</BodyText>
        </div>

        <div className="-m-r-7">
        <Heading size="xs">Dark-3</Heading>
        <BodyText size="xs">HEX<br></br> #053B68</BodyText>
        </div>

        <div className="">
        <Heading size="xs">Dark-4</Heading>
        <BodyText size="xs">HEX<br></br> #02274B</BodyText>
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
