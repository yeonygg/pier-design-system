import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-standard">
            <i className="pier-button-hero__icon fas fa-check"></i>Button Text
        </button>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-standard pier-button-standard--xs -m-h-2">Button Text</button>
        <button className="pier-button-standard pier-button-standard--sm -m-h-2">Button Text</button>
        <button className="pier-button-standard pier-button-standard--md -m-h-2">Button Text</button>
        <button className="pier-button-standard pier-button-standard--lg -m-h-2">Button Text</button>
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-standard pier-button-standard--disabled" disabled>
            Button Text
        </button>
    </Fragment>
);

export const pill = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-standard pier-button-standard--pill">Button Text</button>
    </Fragment>
);

export const secondary = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-standard pier-button-standard--secondary">Button Text</button>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-standard pier-button-standard--dark -m-h-2">Button Text</button>
        <button className="pier-button-standard pier-button-standard--secondary pier-button-standard--dark -m-h-2">Button Text</button>
    </Fragment>
);

export const error = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-standard pier-button-standard--error">Button Text</button>
    </Fragment>
);

export const group = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-standard pier-button-standard--cap-right">Button Text</button>
        <button className="pier-button-standard pier-button-standard--cap">Button Text</button>
        <button className="pier-button-standard pier-button-standard--cap-left">Button Text</button>
    </Fragment>
);

export const block = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-standard pier-button-standard--block -m-b-4">Button Block</button>
    </Fragment>
);
