import { Fragment } from 'react';

export default (
    <Fragment>
    <h4 className="pier-label pier-label--sm -m-b-3">Text Input Label</h4>
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
    <p className="pier-input-group__validation -m-t-2">*required</p>
    </Fragment>
);
