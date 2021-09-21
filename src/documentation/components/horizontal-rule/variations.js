import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const styles = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <hr className="pier-hr -m-b-5"></hr>
        <hr className="pier-hr pier-hr--dark -m-b-5"></hr>
        <hr className="pier-hr pier-hr--hero"></hr>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <hr className="pier-hr pier-hr--sm -m-b-5"></hr>
        <hr className="pier-hr pier-hr--md -m-b-5"></hr>
        <hr className="pier-hr pier-hr--lg"></hr>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <hr className="pier-hr -m-b-5"></hr>
        <hr className="pier-hr pier-hr--white -m-b-5"></hr>
        <hr className="pier-hr pier-hr--dark -m-b-5"></hr>
        <hr className="pier-hr pier-hr--hero"></hr>
    </Fragment>
);
