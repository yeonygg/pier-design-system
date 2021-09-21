import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <code className="pier-codeblock">
        <pre>console.log("Hello World!");</pre>
    </code>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <code className="pier-codeblock pier-codeblock--xs">
            <pre>console.log("Hello World!");</pre>
        </code>
        <code className="pier-codeblock pier-codeblock--sm">
            <pre>console.log("Hello World!");</pre>
        </code>
        <code className="pier-codeblock pier-codeblock--md">
            <pre>console.log("Hello World!");</pre>
        </code>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <code className="pier-codeblock pier-codeblock--dark">
        <pre>console.log("Hello World!");</pre>
    </code>
);
