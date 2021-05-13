import { Fragment } from 'react';

export default (
    <Fragment>
    <label className="pier-input-toggle pier-input-toggle--sm">
    <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

    <div className="pier-input-toggle__indicator pier-input-toggle__indicator--sm"></div>
    <span className="pier-input-toggle__label">Label</span>
</label>

        <label className="pier-input-toggle pier-input-toggle--md">
            <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-toggle__indicator"></div>
            <span className="pier-input-toggle__label">Label</span>
        </label>

        <label className="pier-input-toggle pier-input-toggle--lg">
            <input className="pier-input-toggle__input" type="checkbox" name="example-1" value="" />

            <div className="pier-input-toggle__indicator pier-input-toggle__indicator--lg"></div>
            <span className="pier-input-toggle__label">Label</span>
        </label>
    </Fragment>
);