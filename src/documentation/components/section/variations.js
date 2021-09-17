import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const structure = ReactDOMServer.renderToStaticMarkup(
    <div className="pier-section -bd-1-gray">
        <p>Content in viewport</p>
    </div>
);

export const padding = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-section pier-section--xs -bd-1-gray">
            <p>XS Padding</p>
        </div>
        <div className="pier-section pier-section--sm -bd-1-gray">
            <p>SM Padding</p>
        </div>
        <div className="pier-section pier-section--md -bd-1-gray">
            <p>MD Padding</p>
        </div>
        <div className="pier-section pier-section--lg -bd-1-gray">
            <p>LG Padding</p>
        </div>
        <div className="pier-section pier-section--xl -bd-1-gray">
            <p>XL Padding</p>
        </div>
    </Fragment>
);
