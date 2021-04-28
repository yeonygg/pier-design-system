import { Fragment } from 'react';

export default (
    <Fragment>
        <label className="pier-input-radio pier-input-radio--md">
            <input className="pier-input-radio__input" type="radio" name="example-2" value="" />

            <div className="pier-input-radio__indicator"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>

        <label className="pier-input-radio pier-input-radio--lg">
            <input className="pier-input-radio__input" type="radio" name="example-2" value="" defaultChecked />

            <div className="pier-input-radio__indicator pier-input-radio__indicator--lg"></div>
            <span className="pier-input-radio__label">Label</span>
        </label>
    </Fragment>
);
