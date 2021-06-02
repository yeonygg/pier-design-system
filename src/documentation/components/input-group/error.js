import { Fragment } from 'react';

export default (
    <Fragment>
        <div className="pier-input-group">
            <h4 className="pier-label pier-label--error-icon">Text Input Label</h4>
            <input className="pier-input-text pier-input-text--error" type="text" placeholder="Enter Text" />
            <p className="pier-input-group__validation pier-input-group__validation--error">*required</p>
        </div>
    </Fragment>
);
