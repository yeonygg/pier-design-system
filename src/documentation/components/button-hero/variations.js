import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-hero">
            <span className="pier-button-hero__content">
                <i className="pier-button-hero__icon fas fa-check"></i>Button Text
            </span>
        </button>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        {' '}
        <button className="pier-button-hero pier-button-hero--xs -m-h-2">
            <span className="pier-button-hero__content">
                <i className="pier-button-hero__icon fas fa-check"></i>Button Text
            </span>
        </button>
        <button className="pier-button-hero pier-button-hero--sm -m-h-2">
            <span className="pier-button-hero__content">
                <i className="pier-button-hero__icon fas fa-check"></i>Button Text
            </span>
        </button>
        <button className="pier-button-hero pier-button-hero--md -m-h-2">
            <span className="pier-button-hero__content">
                <i className="pier-button-hero__icon fas fa-check"></i>Button Text
            </span>
        </button>
        <button className="pier-button-hero pier-button-hero--lg -m-h-2">
            <span className="pier-button-hero__content">
                <i className="pier-button-hero__icon fas fa-check"></i>Button Text
            </span>
        </button>
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        {' '}
        <button className="pier-button-hero pier-button-hero--disabled">
            <span className="pier-button-hero__content">
                <i className="pier-button-hero__icon fas fa-check"></i>Button Text
            </span>
        </button>
    </Fragment>
);

export const pill = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        {' '}
        <button className="pier-button-hero pier-button-hero--pill">
            <span className="pier-button-hero__content">
                <i className="pier-button-hero__icon fas fa-check"></i>Button Text
            </span>
        </button>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        {' '}
        <button className="pier-button-hero pier-button-hero--dark">
            <span className="pier-button-hero__content">
                <i className="pier-button-hero__icon fas fa-check"></i>Button Text
            </span>
        </button>
    </Fragment>
);

export const group = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        {' '}
        <button className="pier-button-hero pier-button-hero--cap-left">
            <span className="pier-button-hero__content">Button Text</span>
        </button>
        <button className="pier-button-hero pier-button-hero--cap">
            <span className="pier-button-hero__content">Button Text</span>
        </button>
        <button className="pier-button-hero pier-button-hero--cap-right">
            <span className="pier-button-hero__content">Button Text</span>
        </button>
    </Fragment>
);

export const block = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        {' '}
        <button className="pier-button-hero pier-button-hero--block">
            <span className="pier-button-hero__content">Button Block</span>
        </button>
    </Fragment>
);
