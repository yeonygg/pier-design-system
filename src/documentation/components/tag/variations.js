import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <span className="pier-tag" tabIndex="0">
        Default Tag
    </span>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <span className="pier-tag pier-tag--sm -m-r-5" tabIndex="0">
            Small Tag
        </span>
        <span className="pier-tag pier-tag--md -m-r-5" tabIndex="0">
            Medium Tag
        </span>
        <span className="pier-tag pier-tag--lg" tabIndex="0">
            Large Tag
        </span>
    </Fragment>
);

export const styles = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <span className="pier-tag -m-r-5" tabIndex="0">
            Default Tag
        </span>
        <span className="pier-tag pier-tag--hero -m-r-5" tabIndex="0">
            Hero Tag
        </span>
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(<span className="pier-tag pier-tag--disabled">Disabled Tag</span>);

export const pill = ReactDOMServer.renderToStaticMarkup(
    <span className="pier-tag pier-tag--pill" tabIndex="0">
        Pill Tag
    </span>
);

export const staticTag = ReactDOMServer.renderToStaticMarkup(
    <span className="pier-tag pier-tag--static" tabIndex="0">
        Static Tag
    </span>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <span className="pier-tag pier-tag--dark -m-r-5" tabIndex="0">
            Dark Tag
        </span>
        <span className="pier-tag pier-tag--dark pier-tag--hero -m-r-5" tabIndex="0">
            Dark Hero Tag
        </span>
    </Fragment>
);
