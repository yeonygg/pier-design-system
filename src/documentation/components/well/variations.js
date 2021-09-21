import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <div className="pier-well">
        <div className="pier-section">
            <p className="pier-body-text">This is some well content</p>
        </div>
    </div>
);

export const color = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-well pier-well--primary">
            <div className="pier-section">
                <p className="pier-body-text pier-body-text--primary">This is a primary well</p>
            </div>
        </div>

        <div className="pier-well pier-well--error">
            <div className="pier-section">
                <p className="pier-body-text pier-body-text--error">This is a red well</p>
            </div>
        </div>

        <div className="pier-well pier-well--green">
            <div className="pier-section">
                <p className="pier-body-text pier-body-text--green">This is a green well</p>
            </div>
        </div>

        <div className="pier-well pier-well--blue">
            <div className="pier-section">
                <p className="pier-body-text pier-body-text--blue">This is a blue well</p>
            </div>
        </div>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-well pier-well--sm">
            <div className="pier-section pier-section--sm">
                <p className="pier-body-text">This is a small well</p>
            </div>
        </div>

        <div className="pier-well pier-well--md">
            <div className="pier-section pier-section--md">
                <p className="pier-body-text">This is a medium well</p>
            </div>
        </div>

        <div className="pier-well pier-well--lg">
            <div className="pier-section pier-section--lg">
                <p className="pier-body-text">This is a large well</p>
            </div>
        </div>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-well pier-well--dark">
            <div className="pier-section">
                <p className="pier-body-text pier-body-text--dark">This is a dark well</p>
            </div>
        </div>

        <div className="pier-well pier-well--dark pier-well--primary">
            <div className="pier-section">
                <p className="pier-body-text pier-body-text--dark pier-body-text--primary">This is a dark primary well</p>
            </div>
        </div>

        <div className="pier-well pier-well--dark pier-well--error">
            <div className="pier-section">
                <p className="pier-body-text pier-body-text--dark pier-body-text--error">This is a dark red well</p>
            </div>
        </div>

        <div className="pier-well pier-well--dark pier-well--green">
            <div className="pier-section">
                <p className="pier-body-text pier-body-text--dark pier-body-text--green">This is a dark green well</p>
            </div>
        </div>

        <div className="pier-well pier-well--dark pier-well--blue">
            <div className="pier-section">
                <p className="pier-body-text pier-body-text--dark pier-body-text--blue">This is a dark blue well</p>
            </div>
        </div>
    </Fragment>
);
