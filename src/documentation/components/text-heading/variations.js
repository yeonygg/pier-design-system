import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(<h1 className="pier-heading">Base Heading</h1>);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <h1 className="pier-heading pier-heading--xs">Extra-Small Heading</h1>
        <h1 className="pier-heading pier-heading--sm">Small Heading</h1>
        <h1 className="pier-heading pier-heading--md">Medium Heading</h1>
        <h1 className="pier-heading pier-heading--lg">Large Heading</h1>
    </Fragment>
);

export const error = ReactDOMServer.renderToStaticMarkup(<h1 className="pier-heading pier-heading--error">Error Heading</h1>);

export const dark = ReactDOMServer.renderToStaticMarkup(<h1 className="pier-heading pier-heading--dark">Dark Heading</h1>);
