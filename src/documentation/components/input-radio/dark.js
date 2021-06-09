import { Fragment } from 'react';

export default (
    <Fragment>
        <label className="pier-input-radio pier-input-radio--dark">
            <input className="pier-input-radio__input" type="radio" name="example-4" value="" />

            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>

        <label className="pier-input-radio pier-input-radio--dark -m-l-4">
            <input className="pier-input-radio__input" type="radio" name="example-4" value="" defaultChecked onChange="" />

            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>
    </Fragment>
);
