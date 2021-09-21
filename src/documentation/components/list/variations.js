import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const unorderedList = ReactDOMServer.renderToStaticMarkup(
    <ul className="pier-list">
        <li className="pier-list__item">
            <div className="pier-list__content">List Item</div>
        </li>
        <li className="pier-list__item">
            <div className="pier-list__content">List Item</div>
        </li>
        <li className="pier-list__item">
            <div className="pier-list__content">List Item</div>
        </li>
    </ul>
);

export const orderedList = ReactDOMServer.renderToStaticMarkup(
    <ul className="pier-list pier-list--ordered">
        <li className="pier-list__item">
            <div className="pier-list__content">List Item</div>
        </li>
        <li className="pier-list__item">
            <div className="pier-list__content">List Item</div>
        </li>
        <li className="pier-list__item">
            <div className="pier-list__content">List Item</div>
        </li>
    </ul>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <ul className="pier-list pier-list--sm">
            <li className="pier-list__item">
                <div className="pier-list__content">Small List Item</div>
            </li>
            <li className="pier-list__item">
                <div className="pier-list__content">Small List Item</div>
            </li>
            <li className="pier-list__item">
                <div className="pier-list__content">Small List Item</div>
            </li>
        </ul>
        <ul className="pier-list pier-list--md">
            <li className="pier-list__item">
                <div className="pier-list__content">Medium List Item</div>
            </li>
            <li className="pier-list__item">
                <div className="pier-list__content">Medium List Item</div>
            </li>
            <li className="pier-list__item">
                <div className="pier-list__content">Medium List Item</div>
            </li>
        </ul>
        <ul className="pier-list pier-list--lg">
            <li className="pier-list__item">
                <div className="pier-list__content">Large List Item</div>
            </li>
            <li className="pier-list__item">
                <div className="pier-list__content">Large List Item</div>
            </li>
            <li className="pier-list__item">
                <div className="pier-list__content">Large List Item</div>
            </li>
        </ul>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <ul className="pier-list pier-list--dark">
        <li className="pier-list__item">
            <div className="pier-list__content">List Item</div>
        </li>
        <li className="pier-list__item">
            <div className="pier-list__content">List Item</div>
        </li>
        <li className="pier-list__item">
            <div className="pier-list__content">List Item</div>
        </li>
    </ul>
);
