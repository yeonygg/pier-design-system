import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const inputComboGroup = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-input-combo">
            <input className="pier-input-text pier-input-text--cap-left" type="text" placeholder="Enter Text" />
            <button className="pier-button-hero pier-button-hero--cap-right">
                <span className="pier-button-hero__content">Submit</span>
            </button>
        </div>
    </Fragment>
);

export const inputSelectComboGroup = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="pier-input-combo">
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

            <select className="pier-input-select pier-input-select--cap" required>
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

            <select className="pier-input-select pier-input-select--cap" required>
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

            <button className="pier-button-standard pier-button-standard--cap-left">Submit</button>
        </div>
    </Fragment>
);
