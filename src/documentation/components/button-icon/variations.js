import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-icon">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-icon pier-button-icon--xs -m-h-2">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
        <button className="pier-button-icon pier-button-icon--sm -m-h-2">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
        <button className="pier-button-icon pier-button-icon--md -m-h-2">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
        <button className="pier-button-icon pier-button-icon--lg -m-h-2">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-icon pier-button-icon--disabled">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
    </Fragment>
);

export const pill = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-icon pier-button-icon--pill">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
    </Fragment>
);

export const secondary = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-icon pier-button-icon--secondary">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
    </Fragment>
);

export const hero = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-icon pier-button-icon--hero">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
    </Fragment>
);

export const danger = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-icon pier-button-icon--danger">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <button className="pier-button-icon pier-button-icon--dark -m-h-2">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
        <button className="pier-button-icon pier-button-icon--secondary pier-button-icon--dark -m-h-2">
            <i className="fas fa-pen pier-button-icon__icon"></i>
        </button>
    </Fragment>
);
