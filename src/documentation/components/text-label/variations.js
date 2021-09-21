import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(<p className="pier-label">Base Label</p>);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <p className="pier-label pier-label--sm">Small Label</p>
        <p className="pier-label pier-label--md">Medium Label</p>
        <p className="pier-label pier-label--lg">Medium Label</p>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(<p className="pier-label pier-label--dark">Dark Label</p>);
