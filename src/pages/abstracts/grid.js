import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from 'src/pages-components/Layout';
import { Fragment, useState } from 'react';
import htmlReactParse from 'html-react-parser';
import Editor from 'react-simple-code-editor';
import { highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import { languages } from 'prismjs/components/prism-core';
import API from 'src/documentation/API';
import PageHeading from 'src/pages-components/PageHeading';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/esm/parser-html';
import Accordion from 'src/pier-design-system/components/accordion/Accordion';
import BodyContent from 'src/pages-components/BodyContent';
import { BodyText, Link, Heading, Section, Card, Well } from 'dist';

export default function LayoutPage({ appData }) {
    const breadcrumbs = [
        { label: 'Home', link: '/', disabled: false },
        { label: 'Abstracts', link: '/abstracts', disabled: false },
        { label: 'Grid', link: '', disabled: true },
    ];

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

    return (
        <Fragment>
            <Head>
                <title>Grid | Pier Design System</title>
            </Head>
            <Layout appData={appData}>
                <BodyContent>
                    <PageHeading breadcrumbs={breadcrumbs} title="Grid"></PageHeading>
                    <Section className="-p-b-0">
                        <BodyText>
                            Pier Design System's grid is an extention of{' '}
                            <Link>
                                <a href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_blank">
                                    Bootstrap's Grid System
                                </a>
                            </Link>
                            . Use these helper classes for advanced and responsive page and component layouts.
                        </BodyText>
                    </Section>
                    <Section>
                        <Heading size="sm">Auto-Layout Columns</Heading>
                        <HTMLCodeEditor
                            code={`<div class='pier-container -m-b-6'>
	<div class='pier-row'>
		<div class='pier-column -p-a-2 -bd-1-gray'>1 of 2</div>
		<div class='pier-column -p-a-2 -bd-1-gray'>2 of 2</div>
	</div>
	<div class='pier-row'>
		<div class='pier-column -p-a-2 -bd-1-gray'>1 of 3</div>
		<div class='pier-column -p-a-2 -bd-1-gray'>2 of 3</div>
		<div class='pier-column -p-a-2 -bd-1-gray'>3 of 3</div>
	</div>
</div>
<div class='pier-container -m-b-6'>
	<div class='pier-row'>
		<div class='pier-column -p-a-2 -bd-1-gray'>1 of 3</div>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--6'>2 of 3 (wider)</div>
		<div class='pier-column -p-a-2 -bd-1-gray'>3 of 3</div>
	</div>
	<div class='pier-row'>
		<div class='pier-column -p-a-2 -bd-1-gray'>1 of 3</div>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--3'>2 of 3 (shorter)</div>
		<div class='pier-column -p-a-2 -bd-1-gray'>3 of 3</div>
	</div>
</div>
<div class='pier-container -m-b-6'>
	<div class='pier-row -justify-content-center'>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--lg-2'>1 of 3</div>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--md-auto'>Variable width content</div>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--lg-2'>3 of 3</div>
	</div>
	<div class='pier-row'>
		<div class='pier-column -p-a-2 -bd-1-gray'>1 of 3</div>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--md-auto'>Variable width content</div>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--lg-2'>3 of 3</div>
	</div>
</div>
<div class='pier-container'>
	<div class='pier-row'>
		<div class='pier-column -p-a-2 -bd-1-gray'>broken row</div>
		<div class='pier-column -p-a-2 -bd-1-gray'>with -w-100</div>
		<div class='-w-100'></div>
		<div class='pier-column -p-a-2 -bd-1-gray'>broken row</div>
		<div class='pier-column -p-a-2 -bd-1-gray'>with -w-100</div>
	</div>
</div>`}
                        ></HTMLCodeEditor>
                    </Section>
                    <Section>
                        <Heading size="sm">Responsive Classes</Heading>
                        <HTMLCodeEditor
                            code={`<div class='pier-container'>
	<div class='pier-row'>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--md-8'>--md-8</div>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--md-4'>--md-4</div>
	</div>
	<div class='pier-row'>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--12 pier-column--md-6'>--12 & --md-6</div>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--12 pier-column--md-6'>--12 & --md-6</div>
	</div>
</div>`}
                        ></HTMLCodeEditor>
                    </Section>
                    <Section>
                        <Heading size="sm">Offset</Heading>
                        <HTMLCodeEditor
                            code={`<div class='pier-container'>
	<div class='pier-row'>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--3'>--3</div>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--4 pier-column--offset-4'>--4 & --offset-3</div>
	</div>
	<div class='pier-row'>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--3 pier-column--offset-2'>--1 & --offset-2</div>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--6 pier-column--offset-1'>--3 & --offset-1</div>
	</div>
	<div class='pier-row'>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--12 pier-column--md-4 pier-column--offset-md-1'>--12, --md-4, & --offset-md-1</div>
		<div class='pier-column -p-a-2 -bd-1-gray pier-column--12 pier-column--md-5 pier-column--offset-md-2'>--12, --md-3, & --offset-md-2</div>
	</div>
</div>`}
                        ></HTMLCodeEditor>
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
