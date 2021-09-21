import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <div className="pier-card">
        <div className="pier-section">
            <h1 className="pier-heading pier-heading--sm">Card Header</h1>
            <p className="pier-body-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </div>
);

export const color = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-card pier-card--primary">
            <div className="pier-section">
                <h1 className="pier-heading pier-heading--sm -c-cyan-dark-3">Card Header</h1>
                <p className="pier-body-text -c-cyan-dark-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

        <div className="pier-card pier-card--error">
            <div className="pier-section">
                <h1 className="pier-heading pier-heading--sm pier-heading--error">Card Header</h1>
                <p className="pier-body-text pier-body-text--error">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

        <div className="pier-card pier-card--green">
            <div className="pier-section">
                <h1 className="pier-heading pier-heading--sm -c-green-dark-3">Card Header</h1>
                <p className="pier-body-text -c-green-dark-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

        <div className="pier-card pier-card--blue">
            <div className="pier-section">
                <h1 className="pier-heading pier-heading--sm -c-blue-dark-3">Card Header</h1>
                <p className="pier-body-text -c-blue-dark-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-card pier-card--sm">
            <div className="pier-section pier-section--sm">
                <h1 className="pier-heading pier-heading--sm">Card Header</h1>
                <p className="pier-body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

        <div className="pier-card pier-card--md">
            <div className="pier-section pier-section--md">
                <h1 className="pier-heading pier-heading--sm">Card Header</h1>
                <p className="pier-body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

        <div className="pier-card pier-card--lg">
            <div className="pier-section pier-section--lg">
                <h1 className="pier-heading pier-heading--sm">Card Header</h1>
                <p className="pier-body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-card pier-card--dark">
            <div className="pier-section">
                <h1 className="pier-heading pier-heading--sm pier-heading--dark">Card Header</h1>
                <p className="pier-body-text pier-body-text--dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

        <div className="pier-card pier-card--dark pier-card--primary">
            <div className="pier-section">
                <h1 className="pier-heading pier-heading--sm pier-heading--dark -c-cyan-light-2">Card Header</h1>
                <p className="pier-body-text pier-body-text--dark -c-cyan-light-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

        <div className="pier-card pier-card--dark pier-card--error">
            <div className="pier-section">
                <h1 className="pier-heading pier-heading--sm pier-heading--dark pier-heading--error">Card Header</h1>
                <p className="pier-body-text pier-body-text--dark pier-body-text--error">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

        <div className="pier-card pier-card--dark pier-card--green">
            <div className="pier-section">
                <h1 className="pier-heading pier-heading--sm pier-heading--dark -c-green-light-2">Card Header</h1>
                <p className="pier-body-text pier-body-text--dark -c-green-light-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

        <div className="pier-card pier-card--dark pier-card--blue">
            <div className="pier-section">
                <h1 className="pier-heading pier-heading--sm pier-heading--dark -c-blue-light-2">Card Header</h1>
                <p className="pier-body-text pier-body-text--dark -c-blue-light-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    </Fragment>
);

export const link = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-card pier-card--link" tabIndex="0">
            <div className="pier-section">
                <h1 className="pier-heading pier-heading--sm">Card Header</h1>
                <p className="pier-body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="pier-button-hero">
                    <span className="pier-button-hero__content">
                        <i className="pier-button-hero__icon fas fa-check"></i>Button
                    </span>
                </button>
            </div>
        </div>
    </Fragment>
);
