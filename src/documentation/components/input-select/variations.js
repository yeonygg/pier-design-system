import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <select className="pier-input-select" required>
            <option value="" disabled="" selected="" hidden="">
                Select your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
        </select>
    </Fragment>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <select className="pier-input-select pier-input-select--sm" required>
            <option value="" disabled="" selected="" hidden="">
                Select your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
        </select>

        <select className="pier-input-select pier-input-select--md -m-t-4" required>
            <option value="" disabled="" selected="" hidden="">
                Select your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
        </select>

        <select className="pier-input-select pier-input-select--lg -m-t-4" required>
            <option value="" disabled="" selected="" hidden="">
                Select your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
        </select>
    </Fragment>
);

export const error = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <select className="pier-input-select pier-input-select--error" required>
            <option value="" disabled="" selected="" hidden="">
                Error
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
        </select>
    </Fragment>
);

export const pill = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <select className="pier-input-select pier-input-select--pill" required>
            <option value="" disabled="" selected="" hidden="">
                Select your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
        </select>
    </Fragment>
);

export const disabled = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <select className="pier-input-select pier-input-select--disabled" required>
            <option value="" disabled="" selected="" hidden="">
                Select your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
        </select>
    </Fragment>
);

export const capleft = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <select className="pier-input-select pier-input-select--cap-left" required>
            <option value="" disabled="" selected="" hidden="">
                Select your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
        </select>
    </Fragment>
);

export const capright = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <select className="pier-input-select pier-input-select--cap-right" required>
            <option value="" disabled="" selected="" hidden="">
                Select your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
        </select>
    </Fragment>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <select className="pier-input-select pier-input-select--dark" required>
            <option value="" disabled="" selected="" hidden="">
                Select your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
        </select>
    </Fragment>
);

export const errorDark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <select className="pier-input-select pier-input-select--error pier-input-select--dark" required>
            <option value="" disabled="" selected="" hidden="">
                Error
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
            <option value="5">Option 5</option>
            <option value="6">Option 6</option>
        </select>
    </Fragment>
);
