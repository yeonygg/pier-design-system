import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-toggle">
            <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-toggle__indicator"></div>
            <span className="pier-input-toggle__label">Label</span>
        </label>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-toggle pier-input-toggle--sm">
            <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-toggle__indicator pier-input-toggle__indicator--sm"></div>
            <span className="pier-input-toggle__label">Label</span>
        </label>

        <label className="pier-input-toggle pier-input-toggle--md -m-l-5">
            <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-toggle__indicator"></div>
            <span className="pier-input-toggle__label">Label</span>
        </label>

        <label className="pier-input-toggle pier-input-toggle--lg -m-l-5">
            <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-toggle__indicator pier-input-toggle__indicator--lg"></div>
            <span className="pier-input-toggle__label">Label</span>
        </label>
    </Fragment>
);

export const error = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-toggle pier-input-toggle--error">
            <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-toggle__indicator"></div>
            <span className="pier-input-toggle__label">Label</span>
        </label>
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-toggle pier-input-toggle--disabled">
            <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-toggle__indicator"></div>
            <span className="pier-input-toggle__label">Label</span>
        </label>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-toggle pier-input-toggle--dark">
            <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-toggle__indicator"></div>
            <span className="pier-input-toggle__label">Label</span>
        </label>
    </Fragment>
);

export const errorDark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-toggle pier-input-toggle--error pier-input-toggle--dark">
            <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-toggle__indicator"></div>
            <span className="pier-input-toggle__label">Label</span>
        </label>
    </Fragment>
);
