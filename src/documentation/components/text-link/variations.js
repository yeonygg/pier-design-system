import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(<a className="pier-link">Base Link</a>);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <a className="pier-link pier-link--xs">Extra-Small Link</a>
        <a className="pier-link pier-link--sm">Small Link</a>
        <a className="pier-link pier-link--md">Medium Link</a>
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(<a className="pier-link pier-link--disabled">Base Link</a>);

export const dark = ReactDOMServer.renderToStaticMarkup(<a className="pier-link pier-link--dark">Base Link</a>);
