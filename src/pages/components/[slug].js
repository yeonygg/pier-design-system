import Head from 'next/head';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import htmlReactParse from 'html-react-parser';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/esm/parser-html';
import parserBabel from 'prettier/esm/parser-babel';
import Editor from 'react-simple-code-editor';
import { highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import { languages } from 'prismjs/components/prism-core';
import 'prismjs/themes/prism.css';
import JsxParser from 'react-jsx-parser';
import Layout from 'src/pages-components/Layout';
import PageHeading from 'src/pages-components/PageHeading';
import BodyContent from 'src/pages-components/BodyContent';
import API from 'src/documentation/API';
import {
    Accordion,
    Breadcrumbs,
    BreadcrumbsLink,
    BubbleMenu,
    BubbleMenuItem,
    BubbleMenuLabel,
    Button,
    IconButton,
    Card,
    Screen,
    Section,
    Well,
    HR,
    Form,
    InputCheckbox,
    InputCombo,
    InputRadio,
    InputSelect,
    InputText,
    InputTextArea,
    InputToggle,
    List,
    ListItem,
    LoadingSpinner,
    Nav,
    NavItem,
    NavItemContainer,
    NavItemDropdown,
    NavItemGroup,
    NavSubItem,
    NavSubLabel,
    Table,
    Tag,
    BodyText,
    CodeBlock,
    Heading,
    Label,
    Link,
    Tooltip,
} from 'dist';

//We must import all the Pier react components on this page in order for the interactive jsx editor to work.

export default function ComponentPage({ appData, component }) {
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Components', link: '/components', disabled: false },
        { label: component.title, link: '', disabled: true },
    ];

    const [cssActive, setCssActive] = useState(true);

    function HTMLCodeEditor({ code, dark }) {
        const initValue = prettier.format(code, {
            parser: 'html',
            plugins: [parserHtml],
            tabWidth: 4,
        });

        const [state, setstate] = useState(initValue);

        return (
            <Fragment>
                <Card dark={dark} className="-m-b-0 -br-b-0">
                    <Section>{htmlReactParse(state)}</Section>
                </Card>
                <Well className="-m-b-0 -br-t-0" style={{ marginTop: '-1px' }}>
                    <Accordion title="HTML markup" icon="far fa-code" inCard size="xs" className="-m-b-0">
                        <Section>
                            <Editor
                                value={state}
                                onValueChange={(code) => setstate(code)}
                                highlight={(code) => highlight(code, languages.js)}
                                style={{
                                    fontFamily: `'Roboto Mono', Courier, monospace`,
                                    fontSize: 14,
                                    color: '#0E1E2A',
                                }}
                            />
                        </Section>
                    </Accordion>
                </Well>
            </Fragment>
        );
    }

    function JSXCodeEditor({ code }) {
        var initValue = prettier.format(code, {
            parser: 'babel',
            plugins: [parserBabel],
            tabWidth: 4,
        });
        initValue = initValue.replace(/(;\n)/, '');
        const [state, setstate] = useState(initValue);
        const [dark, setDark] = useState(false);

        return (
            <Fragment>
                <Card className="-m-b-0 -br-b-0" dark={dark}>
                    <Section className="-p-b-9">
                        <JsxParser
                            components={{
                                Accordion,
                                Breadcrumbs,
                                BreadcrumbsLink,
                                BubbleMenu,
                                BubbleMenuItem,
                                BubbleMenuLabel,
                                Button,
                                IconButton,
                                Card,
                                Screen,
                                Section,
                                Well,
                                HR,
                                Form,
                                InputCheckbox,
                                InputCombo,
                                InputRadio,
                                InputSelect,
                                InputText,
                                InputTextArea,
                                InputToggle,
                                List,
                                ListItem,
                                LoadingSpinner,
                                Nav,
                                NavItem,
                                NavItemContainer,
                                NavItemDropdown,
                                NavItemGroup,
                                NavSubItem,
                                NavSubLabel,
                                Table,
                                Tag,
                                BodyText,
                                CodeBlock,
                                Heading,
                                Label,
                                Link,
                                Tooltip,
                            }}
                            jsx={state}
                        ></JsxParser>
                    </Section>
                    <div style={{ position: 'absolute', right: '0', bottom: '0', display: 'flex', alignItems: 'center' }} className="-m-r-2">
                        <Label size="sm" className="-d-inline -m-r-3 -m-b-0">
                            Dark UI
                        </Label>
                        <InputToggle
                            size="sm"
                            value={dark}
                            onChange={() => {
                                setDark(!dark);
                            }}
                        ></InputToggle>
                    </div>
                </Card>
                <Well className="-m-b-0 -br-t-0" style={{ marginTop: '-1px' }}>
                    <Accordion title="JSX" icon="far fa-code" inCard startOpen size="xs" className="-m-b-0">
                        <Section>
                            <Editor
                                value={state}
                                onValueChange={(code) => setstate(code)}
                                highlight={(code) => highlight(code, languages.js)}
                                style={{
                                    fontFamily: `'Roboto Mono', Courier, monospace`,
                                    fontSize: 14,
                                    color: '#0E1E2A',
                                }}
                            />
                        </Section>
                    </Accordion>
                </Well>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Head>
                <title>{component.title} | Pier Design System</title>
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading
                        breadcrumbs={breadcrumbs}
                        title={component.title}
                        lastUpdated={component['last-updated']}
                        description={component.description}
                    ></PageHeading>
                    <Section className="-p-b-0 -p-t-2">
                        <div>
                            <Button
                                theme={cssActive ? 'primary' : 'secondary'}
                                cap="right"
                                onClick={() => {
                                    setCssActive(true);
                                }}
                            >
                                CSS Styling
                            </Button>
                            <Button
                                theme={!cssActive ? 'primary' : 'secondary'}
                                cap="left"
                                onClick={() => {
                                    setCssActive(false);
                                }}
                            >
                                React Components
                            </Button>
                        </div>
                    </Section>
                    {cssActive ? (
                        <Fragment>
                            {component.variations.map((variation) => (
                                <Section key={variation.name}>
                                    <Heading size="sm">{variation.name}</Heading>
                                    <BodyText>{htmlReactParse(variation.description)}</BodyText>
                                    <HTMLCodeEditor code={variation.markup} dark={variation.dark}></HTMLCodeEditor>
                                </Section>
                            ))}
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Section>
                                <BodyText>To import, use:</BodyText>
                                <Well className="-m-b-0">
                                    <Section>
                                        <Editor
                                            value={component['react-import']}
                                            onValueChange={() => {}}
                                            highlight={(code) => highlight(code, languages.js)}
                                            style={{
                                                fontFamily: `'Roboto Mono', Courier, monospace`,
                                                fontSize: 14,
                                                color: '#0E1E2A',
                                            }}
                                        />
                                    </Section>
                                </Well>
                            </Section>
                            <Section>
                                <JSXCodeEditor code={component['react-demo']}></JSXCodeEditor>
                            </Section>
                            {component['react-components'].map((item) => (
                                <Section key={item.name}>
                                    <Card className="-p-b-4">
                                        <Section className="-p-b-0">
                                            <Heading size="sm">{item.name}</Heading>
                                        </Section>
                                        {item.props.map((prop) => (
                                            <Section className="-p-b-4 -p-t-4" key={prop.name}>
                                                <div className="-d-flex -align-items-center -m-b-0">
                                                    <Label style={{ width: '120px' }} className="-m-b-0">
                                                        Prop Name
                                                    </Label>
                                                    <BodyText className="-m-b-0" style={{ flex: '1' }}>
                                                        <code className="pier-body-text__inline-code -text-w-bold">{prop.name.toString()}</code>
                                                    </BodyText>
                                                </div>
                                                <div className="-d-flex -align-items-center -m-b-0">
                                                    <Label size="sm" style={{ width: '120px' }} className="-m-b-0">
                                                        Type
                                                    </Label>
                                                    <BodyText size="sm" className="-m-b-0" style={{ flex: '1' }}>
                                                        {prop.type.toString()}
                                                    </BodyText>
                                                </div>
                                                <div className="-d-flex -align-items-center -m-b-2">
                                                    <Label size="sm" style={{ width: '120px' }} className="-m-b-0">
                                                        Required
                                                    </Label>
                                                    <BodyText size="sm" className="-m-b-0" style={{ flex: '1' }}>
                                                        {prop.isRequired.toString()}
                                                    </BodyText>
                                                </div>
                                                <div className="-d-flex -align-items-center -m-b-2">
                                                    <Label size="sm" style={{ width: '120px' }} className="-m-b-0">
                                                        Default Value
                                                    </Label>
                                                    <BodyText size="sm" className="-m-b-0" style={{ flex: '1' }}>
                                                        <code className="pier-body-text__inline-code pier-body-text__inline-code--sm">
                                                            {prop.default === '' ? `null` : prop.default.toString()}
                                                        </code>
                                                    </BodyText>
                                                </div>
                                                <div className="-d-flex -align-items-center -m-b-2">
                                                    <Label size="sm" style={{ width: '120px' }} className="-m-b-0">
                                                        Description
                                                    </Label>
                                                    <BodyText size="sm" className="-m-b-0" style={{ flex: '1' }}>
                                                        {prop.description.toString()}
                                                    </BodyText>
                                                </div>
                                            </Section>
                                        ))}
                                    </Card>
                                </Section>
                            ))}
                        </Fragment>
                    )}
                </BodyContent>
            </Layout>
        </Fragment>
    );
}

ComponentPage.propTypes = {
    appData: PropTypes.object,
    component: PropTypes.object,
};

export async function getStaticPaths() {
    const paths = API.components.map((component) => ({
        params: { slug: component.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const result = API.components.filter((component) => component.slug === params.slug);
    return {
        props: {
            appData: API,
            component: result[0],
        },
    };
}
