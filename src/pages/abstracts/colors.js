import Head from 'next/head';
import PropTypes, { element } from 'prop-types';
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
import Tag from 'src/pier-design-system/components/tag/Tag';
import Tooltip from 'src/pier-design-system/components/tooltip/Tooltip';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import React, { useState } from 'react';

function ColorCard({ title, color, hex }) {
    const classes = `pier-item ${color}`;

    const [clicked, setClicked] = useState(false);
    const [tooltipText, setTooltipText] = useState('Click to Copy');
    const [hover, setHover] = useState(false);

    function clickColor() {
        setClicked(true);
        setTooltipText('Copied to Clipboard!');

        if (!hover) {
            setTimeout(() => {
                setClicked(false);
                resetToolTip();
            }, 1000);
        }
    }

    function mouseLeave() {
        setHover(false);
        setClicked(false);
        resetToolTip();
    }

    function resetToolTip() {
        setTimeout(() => {
            setTooltipText('Click to Copy');
        }, 500);
    }

    return (
        <CopyToClipboard
            text={hex}
            onCopy={() => {
                clickColor();
            }}
        >
            <div className={classes}>
                <div className="-d-flex -justify-content-between -align-items-center -p-a-4">
                    <Tag theme="white" isStatic size="xs">
                        {title}
                    </Tag>

                    <Tooltip
                        text={tooltipText}
                        position="left"
                        open={clicked}
                        onMouseLeave={mouseLeave}
                        onMouseEnter={() => {
                            setHover(true);
                        }}
                    >
                        <Tag theme="white" size="xs">
                            {hex}
                        </Tag>
                    </Tooltip>
                </div>
            </div>
        </CopyToClipboard>
    );
}

function ColorCardGradient({ title, color, hex }) {
    const classesGradient = `pier-item--gradient ${color}`;
    const [clicked, setClicked] = useState(false);
    const [tooltipText, setTooltipText] = useState('Click to Copy');
    const [hover, setHover] = useState(false);

    function clickColor() {
        setClicked(true);
        setTooltipText('Copied to Clipboard!');

        if (!hover) {
            setTimeout(() => {
                setClicked(false);
                resetToolTip();
            }, 1000);
        }
    }

    function mouseLeave() {
        setHover(false);
        setClicked(false);
        resetToolTip();
    }

    function resetToolTip() {
        setTimeout(() => {
            setTooltipText('Click to Copy');
        }, 500);
    }
    return (
        <Tooltip
            text={tooltipText}
            position="bottom"
            open={clicked}
            onMouseLeave={mouseLeave}
            onMouseEnter={() => {
                setHover(true);
            }}
        >
            <CopyToClipboard
                text={hex}
                onCopy={() => {
                    clickColor();
                }}
            >
                <div className={classesGradient}></div>
            </CopyToClipboard>
        </Tooltip>
    );
}

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
                                <div className="-flex-column -m-r-5">
                                    <ColorCardGradient
                                        color="-bgc-primaryBoulevard"
                                        hex="linear-gradient(90deg, #08D18B -7%, #25B9EF 107%);"
                                    ></ColorCardGradient>
                                    <div className="-m-t-8">
                                        <Heading size="xs">
                                            Primary <br></br> Boulevard
                                        </Heading>
                                        <BodyText size="xs">
                                            Cyan<br></br> #25B9EF
                                        </BodyText>
                                        <BodyText size="xs">
                                            Green<br></br> #08D18B
                                        </BodyText>
                                    </div>
                                </div>

                                <div className="-flex-column -m-r-5">
                                    <ColorCardGradient color="-bgc-deepOcean" hex="linear-gradient(90deg, #25B9EF -7%, #6FF7CE 107%);"></ColorCardGradient>
                                    <div className="-m-t-8">
                                        <Heading size="xs">Deep Ocean</Heading>
                                        <BodyText size="xs">
                                            Cyan<br></br> #25B9EF
                                        </BodyText>
                                        <BodyText size="xs">
                                            Teal<br></br> #6FF7CE
                                        </BodyText>
                                    </div>
                                </div>

                                <div className="-flex-column -m-r-5">
                                    <ColorCardGradient color="-bgc-neonSky" hex="linear-gradient(90deg, #25B9EF -7%, #6FF7CE 107%);"></ColorCardGradient>
                                    <div className="-m-t-8">
                                        <Heading size="xs">Neon Sky</Heading>
                                        <BodyText size="xs">
                                            Cyan<br></br> #25B9EF
                                        </BodyText>
                                        <BodyText size="xs">
                                            Teal<br></br> #6FF7CE
                                        </BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column -m-r-5">
                                    <ColorCardGradient color="-bgc-earlySunset" hex="linear-gradient(0deg, #E24550 -7%, #FCA522 107%);"></ColorCardGradient>
                                    <div className="-m-t-8">
                                        <Heading size="xs">Early Sunset</Heading>
                                        <BodyText size="xs">
                                            Red<br></br> #E24550
                                        </BodyText>
                                        <BodyText size="xs">
                                            Orange<br></br> #FCA522
                                        </BodyText>
                                    </div>
                                </div>
                                <div className="-flex-column">
                                    <ColorCardGradient color="-bgc-firesideGlow" hex="linear-gradient(90deg, #FCA522 -7%, #FCD93D 107%);"></ColorCardGradient>
                                    <div className="-m-t-8">
                                        <Heading size="xs">Fireside Glow</Heading>
                                        <BodyText size="xs">
                                            Orange<br></br> #FCA522
                                        </BodyText>
                                        <BodyText size="xs">
                                            Yellow<br></br> #FCD93D
                                        </BodyText>
                                    </div>
                                </div>
                            </Section>
                        </Card>
                    </Section>

                    <Section>
                        <Heading size="sm">Grays</Heading>

                        <div>
                            <ColorCard title="White" color="-bgc-white" hex="#FFFFFF"></ColorCard>
                            <ColorCard title="Light-4" color="-bgc-light-4" hex="#F7F8F8"></ColorCard>
                            <ColorCard title="Light-3" color="-bgc-light-3" hex="#F1F3F3"></ColorCard>
                            <ColorCard title="Light-2" color="-bgc-light-2" hex="#EBEEEF"></ColorCard>
                            <ColorCard title="Light-1" color="-bgc-light-1" hex="#E3E7E8"></ColorCard>
                            <ColorCard title="Gray-4" color="-bgc-gray-4" hex="#D0D6D8"></ColorCard>
                            <ColorCard title="Gray-3" color="-bgc-gray-3" hex="#BCC5CA"></ColorCard>
                            <ColorCard title="Gray-2" color="-bgc-gray-2" hex="#A5B2B8"></ColorCard>
                            <ColorCard title="Default Gray" color="-bgc-gray" hex="#8A9BA3"></ColorCard>
                            <ColorCard title="Dark-1" color="-bgc-dark-1" hex="#6D808B"></ColorCard>
                            <ColorCard title="Dark-2" color="-bgc-dark-2" hex="#53626D"></ColorCard>
                            <ColorCard title="Dark-3" color="-bgc-dark-3" hex="#2D3A43"></ColorCard>
                            <ColorCard title="Dark-4" color="-bgc-dark-4" hex="#0E1E2A"></ColorCard>
                            <ColorCard title="Black" color="-bgc-black" hex="#000000"></ColorCard>
                        </div>
                    </Section>

                    <Section>
                        <Heading size="sm">Primary</Heading>
                        <div>
                            <ColorCard title="Light-4" color="-bgc-cyan-light-4" hex="#DEF4FD"></ColorCard>
                            <ColorCard title="Light-3" color="-bgc-cyan-light-3" hex="#A8E3F9"></ColorCard>
                            <ColorCard title="Light-2" color="-bgc-cyan-light-2" hex="#71D1F5"></ColorCard>
                            <ColorCard title="Light-1" color="-bgc-cyan-light-1" hex="#46C3F1"></ColorCard>
                            <ColorCard title="Default Cyan" color="-bgc-cyan" hex="#25B9EF"></ColorCard>
                            <ColorCard title="Dark-1" color="-bgc-cyan-dark-1" hex="#1BA2D5"></ColorCard>
                            <ColorCard title="Dark-2" color="-bgc-cyan-dark-2" hex="#1481AD"></ColorCard>
                            <ColorCard title="Dark-3" color="-bgc-cyan-dark-3" hex="#0D6185"></ColorCard>
                            <ColorCard title="Dark-4" color="-bgc-cyan-dark-4" hex="#07405E"></ColorCard>
                        </div>
                    </Section>

                    <Section>
                        <Heading size="sm">Green</Heading>

                        <div>
                            <ColorCard title="Light-4" color="-bgc-green-light-4" hex="#DAF8EE"></ColorCard>
                            <ColorCard title="Light-3" color="-bgc-green-light-3" hex="#9CEDD1"></ColorCard>
                            <ColorCard title="Light-2" color="-bgc-green-light-2" hex="#5EE1B4"></ColorCard>
                            <ColorCard title="Light-1" color="-bgc-green-light-1" hex="#2DD89C"></ColorCard>
                            <ColorCard title="Default Green" color="-bgc-green" hex="#08D18B"></ColorCard>
                            <ColorCard title="Dark-1" color="-bgc-green-dark-1" hex="#05B67A"></ColorCard>
                            <ColorCard title="Dark-2" color="-bgc-green-dark-2" hex="#039162"></ColorCard>
                            <ColorCard title="Dark-3" color="-bgc-green-dark-3" hex="#026D4B"></ColorCard>
                            <ColorCard title="Dark-4" color="-bgc-green-dark-4" hex="#014834"></ColorCard>
                        </div>
                    </Section>

                    <Section>
                        <Heading size="sm">Blue</Heading>
                        <div>
                            <ColorCard title="Light-4" color="-bgc-blue-light-4" hex="#DCE9F4"></ColorCard>
                            <ColorCard title="Light-3" color="-bgc-blue-light-3" hex="#A2C5E0"></ColorCard>
                            <ColorCard title="Light-2" color="-bgc-blue-light-2" hex="#68A1CE"></ColorCard>
                            <ColorCard title="Light-1" color="-bgc-blue-light-1" hex="#3A84BE"></ColorCard>
                            <ColorCard title="Default Blue" color="-bgc-blue" hex="#176FB3"></ColorCard>
                            <ColorCard title="Dark-1" color="-bgc-blue-dark-1" hex="#0F62A3"></ColorCard>
                            <ColorCard title="Dark-2" color="-bgc-blue-dark-2" hex="#0A4E86"></ColorCard>
                            <ColorCard title="Dark-3" color="-bgc-blue-dark-3" hex="#053B68"></ColorCard>
                            <ColorCard title="Dark-4" color="-bgc-blue-dark-4" hex="#02274B"></ColorCard>
                        </div>
                    </Section>

                    <Section>
                        <Heading size="sm">Teal</Heading>
                        <div>
                            <ColorCard title="Light-4" color="-bgc-teal-light-4" hex="#E9FEF8"></ColorCard>
                            <ColorCard title="Light-3" color="-bgc-teal-light-3" hex="#CAFCEC"></ColorCard>
                            <ColorCard title="Light-2" color="-bgc-teal-light-2" hex="#B1FAE4"></ColorCard>
                            <ColorCard title="Light-1" color="-bgc-teal-light-1" hex="#91FADA"></ColorCard>
                            <ColorCard title="Default Teal" color="-bgc-teal" hex="#6FF7CE"></ColorCard>
                            <ColorCard title="Dark-1" color="-bgc-teal-dark-1" hex="#5CD8B4"></ColorCard>
                            <ColorCard title="Dark-2" color="-bgc-teal-dark-2" hex="#46AD92"></ColorCard>
                            <ColorCard title="Dark-3" color="-bgc-teal-dark-3" hex="#31816F"></ColorCard>
                            <ColorCard title="Dark-4" color="-bgc-teal-dark-4" hex="#1D564D"></ColorCard>
                        </div>
                    </Section>

                    <Section>
                        <Heading size="sm">Yellow</Heading>
                        <div>
                            <ColorCard title="Light-4" color="-bgc-yellow-light-4" hex="#FFFAE8"></ColorCard>
                            <ColorCard title="Light-3" color="-bgc-yellow-light-3" hex="#FEF2BC"></ColorCard>
                            <ColorCard title="Light-2" color="-bgc-yellow-light-2" hex="#FDE88B"></ColorCard>
                            <ColorCard title="Light-1" color="-bgc-yellow-light-1" hex="#FCE165"></ColorCard>
                            <ColorCard title="Default Yellow" color="-bgc-yellow" hex="#FCD93D"></ColorCard>
                            <ColorCard title="Dark-1" color="-bgc-yellow-dark-1" hex="#D9BC33"></ColorCard>
                            <ColorCard title="Dark-2" color="-bgc-yellow-dark-2" hex="#A99628"></ColorCard>
                            <ColorCard title="Dark-3" color="-bgc-yellow-dark-3" hex="#79701E"></ColorCard>
                            <ColorCard title="Dark-4" color="-bgc-yellow-dark-4" hex="#4A4914"></ColorCard>
                        </div>
                    </Section>

                    <Section>
                        <Heading size="sm">Orange</Heading>
                        <div>
                            <ColorCard title="Light-4" color="-bgc-orange-light-4" hex="#FFF1DE"></ColorCard>
                            <ColorCard title="Light-3" color="-bgc-orange-light-3" hex="#FEDBA7"></ColorCard>
                            <ColorCard title="Light-2" color="-bgc-orange-light-2" hex="#FDC46F"></ColorCard>
                            <ColorCard title="Light-1" color="-bgc-orange-light-1" hex="#FCB243"></ColorCard>
                            <ColorCard title="Default Orange" color="-bgc-orange" hex="#FCA522"></ColorCard>
                            <ColorCard title="Dark-1" color="-bgc-orange-dark-1" hex="#D98F1D"></ColorCard>
                            <ColorCard title="Dark-2" color="-bgc-orange-dark-2" hex="#A97217"></ColorCard>
                            <ColorCard title="Dark-3" color="-bgc-orange-dark-3" hex="#795511"></ColorCard>
                            <ColorCard title="Dark-4" color="-bgc-orange-dark-4" hex="#4A380B"></ColorCard>
                        </div>
                    </Section>

                    <Section>
                        <Heading size="sm">Red</Heading>
                        <div>
                            <ColorCard title="Light-4" color="-bgc-red-light-4" hex="#FBE3E4"></ColorCard>
                            <ColorCard title="Light-3" color="-bgc-red-light-3" hex="#F3B5B8"></ColorCard>
                            <ColorCard title="Light-2" color="-bgc-red-light-2" hex="#EC868B"></ColorCard>
                            <ColorCard title="Light-1" color="-bgc-red-light-1" hex="#E66168"></ColorCard>
                            <ColorCard title="Default Red" color="-bgc-red" hex="#E24550"></ColorCard>
                            <ColorCard title="Dark-1" color="-bgc-red-dark-1" hex="#C83941"></ColorCard>
                            <ColorCard title="Dark-2" color="-bgc-red-dark-2" hex="#9E2C34"></ColorCard>
                            <ColorCard title="Dark-3" color="-bgc-red-dark-3" hex="#732027"></ColorCard>
                            <ColorCard title="Dark-4" color="-bgc-red-dark-4" hex="#48141B"></ColorCard>
                        </div>
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
