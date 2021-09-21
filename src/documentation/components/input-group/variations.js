import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-input-group">
            <h4 className="pier-label">Text Input Label</h4>
            <input className="pier-input-text" type="text" placeholder="Enter Text" />
            <p className="pier-input-group__validation">*required</p>
        </div>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-input-group">
            <h4 className="pier-label pier-label--sm">Text Input Label</h4>
            <input className="pier-input-text pier-input-text--sm" type="text" placeholder="Enter Text" />
            <p className="pier-input-group__validation">*required</p>
        </div>
        <div className="pier-input-group">
            <h4 className="pier-label pier-label--md">Text Input Label</h4>
            <input className="pier-input-text pier-input-text--md" type="text" placeholder="Enter Text" />
            <p className="pier-input-group__validation">*required</p>
        </div>
        <div className="pier-input-group">
            <h4 className="pier-label pier-label--lg">Text Input Label</h4>
            <input className="pier-input-text pier-input-text--lg" type="text" placeholder="Enter Text" />
            <p className="pier-input-group__validation">*required</p>
        </div>
    </Fragment>
);

export const error = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-input-group">
            <h4 className="pier-label pier-label--error-icon">Text Input Label</h4>
            <input className="pier-input-text pier-input-text--error" type="text" placeholder="Enter Text" />
            <p className="pier-input-group__validation pier-input-group__validation--error">*required</p>
        </div>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-input-group">
            <h4 className="pier-label pier-label--dark-icon">Text Input Label</h4>
            <input className="pier-input-text pier-input-text--dark" type="text" placeholder="Enter Text" />
            <p className="pier-input-group__validation">*required</p>
        </div>
    </Fragment>
);
