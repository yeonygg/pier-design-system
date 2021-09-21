import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-text" type="text" placeholder="Enter Text" />
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-text pier-input-text--sm" type="text" placeholder="Enter Text" />
        <input className="pier-input-text pier-input-text--md -m-t-4" type="text" placeholder="Enter Text" />
        <input className="pier-input-text pier-input-text--lg -m-t-4" type="text" placeholder="Enter Text" />
    </Fragment>
);

export const error = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-text pier-input-text--error" type="text" placeholder="Error" />
    </Fragment>
);

export const pill = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-text pier-input-text--pill" type="text" placeholder="Enter Text" />
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-text pier-input-text--disabled" type="text" placeholder="Enter Text" />
    </Fragment>
);

export const capleft = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-text pier-input-text--cap-left" type="text" placeholder="Enter Text" />
    </Fragment>
);

export const capright = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-text pier-input-text--cap-right" type="text" placeholder="Enter Text" />
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-text pier-input-text--dark" type="text" placeholder="Enter Text" />
    </Fragment>
);

export const errorDark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-text pier-input-text--dark pier-input-text--error" type="text" placeholder="Enter Text" />
    </Fragment>
);
