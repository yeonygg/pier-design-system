import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <div className="pier-breadcrumbs">
        <div className="pier-breadcrumbs__crumb">
            <a className="pier-link">Home</a>
        </div>
        <div className="pier-breadcrumbs__crumb">
            <a className="pier-link pier-link--disabled">First Page</a>
        </div>
        <div className="pier-breadcrumbs__crumb">
            <a className="pier-link">Last Page</a>
        </div>
    </div>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <div className="pier-breadcrumbs pier-breadcrumbs--dark">
        <div className="pier-breadcrumbs__crumb">
            <a className="pier-link">Home</a>
        </div>
        <div className="pier-breadcrumbs__crumb">
            <a className="pier-link pier-link--disabled">First Page</a>
        </div>
        <div className="pier-breadcrumbs__crumb">
            <a className="pier-link">Last Page</a>
        </div>
    </div>
);

export const ellipsis = ReactDOMServer.renderToStaticMarkup(
    <div className="pier-breadcrumbs">
        <div className="pier-breadcrumbs__crumb">
            <a className="pier-link">Home</a>
        </div>
        <div className="pier-breadcrumbs__crumb">
            <span className="pier-breadcrumbs__ellipsis"></span>
        </div>
        <div className="pier-breadcrumbs__crumb">
            <a className="pier-link">Last Page</a>
        </div>
    </div>
);
