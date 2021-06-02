import { Fragment } from 'react';

export default (
    <Fragment>
        <div className="pier-input-group">
            <h4 className="pier-label pier-label--sm">Text Input Label</h4>
            <input className="pier-input-text pier-input-text--sm" type="text" placeholder="Enter Text" />
            <p className="pier-input-group__validation">*required</p>
        </div>
        <div className="pier-input-group">
            <h4 className="pier-label pier-label--md">Text Input Label</h4>
            <input className="pier-input-text pier-input-text--md" type="text" placeholder="Enter Text" />
            <p className="pier-input-group__validation">*required</p>
        </div>
        <div className="pier-input-group">
            <h4 className="pier-label pier-label--lg">Text Input Label</h4>
            <input className="pier-input-text pier-input-text--lg" type="text" placeholder="Enter Text" />
            <p className="pier-input-group__validation">*required</p>
        </div>
    </Fragment>
);
