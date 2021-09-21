import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <textarea className="pier-input-textarea" placeholder="Enter Text"></textarea>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <textarea className="pier-input-textarea pier-input-textarea--sm" placeholder="Enter Text"></textarea>
        <textarea className="pier-input-textarea pier-input-textarea--md -m-t-4" placeholder="Enter Text"></textarea>
        <textarea className="pier-input-textarea pier-input-textarea--lg -m-t-4" placeholder="Enter Text"></textarea>
    </Fragment>
);

export const auto = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <textarea className="pier-input-textarea pier-input-textarea--auto" placeholder="Enter Text"></textarea>
    </Fragment>
);

export const horizontal = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <textarea className="pier-input-textarea pier-input-textarea--h" placeholder="Enter Text"></textarea>
    </Fragment>
);

export const textDisabled = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <textarea className="pier-input-textarea pier-input-textarea--d" placeholder="Enter Text"></textarea>
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <textarea className="pier-input-textarea pier-input-textarea--disabled" placeholder="Enter Text"></textarea>
    </Fragment>
);

export const error = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-textarea pier-input-textarea--error" type="text" placeholder="Error" />
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-textarea pier-input-textarea--dark" type="text" placeholder="Enter Text" />
    </Fragment>
);

export const errorDark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <input className="pier-input-textarea pier-input-textarea--dark pier-input-textarea--error" type="text" placeholder="Enter Text" />
    </Fragment>
);
