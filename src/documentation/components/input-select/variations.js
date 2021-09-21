import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-checkbox">
            <input className="pier-input-checkbox__input" type="checkbox" value="" />
            <div className="pier-input-checkbox__indicator"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>
    </Fragment>
);

export const partial = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-checkbox pier-input-checkbox--partial">
            <input className="pier-input-checkbox__input" type="checkbox" value="" />
            <div className="pier-input-checkbox__indicator"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-checkbox pier-input-checkbox--sm">
            <input className="pier-input-checkbox__input" type="checkbox" value="" />

            <div className="pier-input-checkbox__indicator pier-input-checkbox__indicator--sm"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>
        <label className="pier-input-checkbox pier-input-checkbox--md -m-l-4">
            <input className="pier-input-checkbox__input" type="checkbox" value="" />

            <div className="pier-input-checkbox__indicator"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>

        <label className="pier-input-checkbox pier-input-checkbox--lg -m-l-4">
            <input className="pier-input-checkbox__input" type="checkbox" value="" onChange="" />

            <div className="pier-input-checkbox__indicator pier-input-checkbox__indicator--lg"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>
    </Fragment>
);

export const error = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-checkbox pier-input-checkbox--error">
            <input className="pier-input-checkbox__input" type="checkbox" value="" />
            <div className="pier-input-checkbox__indicator"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-checkbox pier-input-checkbox--disabled">
            <input className="pier-input-checkbox__input" type="checkbox" value="" />
            <div className="pier-input-checkbox__indicator"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-checkbox pier-input-checkbox--dark">
            <input className="pier-input-checkbox__input" type="checkbox" value="" />
            <div className="pier-input-checkbox__indicator"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>
    </Fragment>
);

export const partialDark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-checkbox pier-input-checkbox--dark pier-input-checkbox--partial">
            <input className="pier-input-checkbox__input" type="checkbox" value="" />
            <div className="pier-input-checkbox__indicator"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>
    </Fragment>
);

export const errorDark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-checkbox pier-input-checkbox--dark pier-input-checkbox--error">
            <input className="pier-input-checkbox__input" type="checkbox" value="" />
            <div className="pier-input-checkbox__indicator"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>
    </Fragment>
);
