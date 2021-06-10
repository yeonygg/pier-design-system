import { Fragment } from 'react';

export default (
    <Fragment>
    <label className="pier-input-checkbox pier-input-checkbox--sm">
    <input className="pier-input-checkbox__input" type="checkbox" name="example-1" value="" />

    <div className="pier-input-checkbox__indicator pier-input-checkbox__indicator--sm"></div>
    <span className="pier-input-checkbox__label">Label</span>
</label>

        <label className="pier-input-checkbox pier-input-checkbox--md -m-l-4">
            <input className="pier-input-checkbox__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-checkbox__indicator"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>

        <label className="pier-input-checkbox pier-input-checkbox--lg -m-l-4">
            <input className="pier-input-checkbox__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-checkbox__indicator pier-input-checkbox__indicator--lg"></div>
            <span className="pier-input-checkbox__label">Label</span>
        </label>
    </Fragment>
);
