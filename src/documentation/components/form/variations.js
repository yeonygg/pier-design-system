import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const inputForm = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <form className="pier-form">
            <h4 className="pier-label pier-label--md -m-b-3">Name</h4>
            <input className="pier-input-text -m-b-7" type="text" placeholder="Enter Text" />

            <h4 className="pier-label pier-label--md -m-b-3">Select</h4>
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
            <p className="pier-input-group__validation -m-t-2  -m-b-7">*required</p>

            <h4 className="pier-label pier-label--md -m-b-3">Text Input Label</h4>
            <textarea className="pier-input-textarea pier-input-textarea--form" placeholder="Enter Text"></textarea>

            <label className="pier-input-checkbox -m-t-8 -m-r-9">
                <input className="pier-input-checkbox__input" type="checkbox" name="example-1" value="" />

                <div className="pier-input-checkbox__indicator"></div>
                <span className="pier-input-checkbox__label">Test 1</span>
            </label>

            <label className="pier-input-checkbox">
                <input className="pier-input-checkbox__input" type="checkbox" name="example-1" value="" />

                <div className="pier-input-checkbox__indicator"></div>
                <span className="pier-input-checkbox__label">Test 2</span>
            </label>

            <div className="pier-input-group -m-t-8">
                <h4 className="pier-label pier-label--md -m-b-2">Radio Input Label</h4>
                <label className="pier-input-radio">
                    <input className="pier-input-radio__input" type="radio" name="example-1" value="" onChange="" />
                    <div className="pier-input-radio__indicator"></div>
                    <span className="pier-input-radio__label">Test 1</span>
                </label>
                <label className="pier-input-radio -m-l-9">
                    <input className="pier-input-radio__input" type="radio" name="example-1" value="" />
                    <div className="pier-input-radio__indicator"></div>
                    <span className="pier-input-radio__label">Test 2</span>
                </label>
                <label className="pier-input-radio -m-l-9">
                    <input className="pier-input-radio__input" type="radio" name="example-1" value="" />
                    <div className="pier-input-radio__indicator"></div>
                    <span className="pier-input-radio__label">Test 3</span>
                </label>
                <p className="pier-input-group__validation -m-t-2">*required</p>
            </div>

            <label className="pier-input-toggle -m-t-7">
                <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

                <div className="pier-input-toggle__indicator"></div>
                <span className="pier-input-toggle__label">Test Toggle</span>
            </label>

            <div className="-m-v-7">
                <button className="pier-button-hero">
                    <span className="pier-button-hero__content">Submit</span>
                </button>
            </div>
        </form>
    </Fragment>
);
