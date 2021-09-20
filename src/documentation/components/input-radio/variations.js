import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-radio">
            <input className="pier-input-radio__input" type="radio" name="example-1" value="" />
            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>

        <label className="pier-input-radio -m-l-4">
            <input className="pier-input-radio__input" defaultChecked type="radio" name="example-1" value="" onChange="" />
            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-radio pier-input-radio--sm">
            <input className="pier-input-radio__input" type="radio" name="example-2" value="" />

            <div className="pier-input-radio__indicator pier-input-radio__indicator--sm"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>
        <label className="pier-input-radio pier-input-radio--md -m-l-4">
            <input className="pier-input-radio__input" type="radio" name="example-2" value="" />

            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>

        <label className="pier-input-radio pier-input-radio--lg -m-l-4">
            <input className="pier-input-radio__input" type="radio" name="example-2" value="" defaultChecked onChange="" />

            <div className="pier-input-radio__indicator pier-input-radio__indicator--lg"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>
    </Fragment>
);

export const error = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-radio pier-input-radio--error">
            <input className="pier-input-radio__input" type="radio" name="example-3" value="" />

            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>

        <label className="pier-input-radio pier-input-radio--error -m-l-4">
            <input className="pier-input-radio__input" type="radio" name="example-3" value="" defaultChecked onChange="" />

            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-radio pier-input-radio--disabled">
            <input className="pier-input-radio__input" type="radio" name="example-1" value="" />

            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-radio pier-input-radio--dark">
            <input className="pier-input-radio__input" type="radio" name="example-4" value="" />

            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>

        <label className="pier-input-radio pier-input-radio--dark -m-l-4">
            <input className="pier-input-radio__input" type="radio" name="example-4" value="" defaultChecked onChange="" />

            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>
    </Fragment>
);

export const errorDark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <label className="pier-input-radio pier-input-radio--error pier-input-radio--dark">
            <input className="pier-input-radio__input pier-input-radio__input" type="radio" name="example-5" value="" />

            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>

        <label className="pier-input-radio pier-input-radio--error pier-input-radio--dark -m-l-4">
            <input className="pier-input-radio__input pier-input-radio__input" type="radio" name="example-5" value="" defaultChecked onChange="" />

            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>
    </Fragment>
);
