import { Fragment } from 'react';

export default (
    <Fragment>
   
    <h4 className="pier-label pier-label--sm -m-b-4">Text Input Label</h4>
    <div className="pier-input-combo">
    <input className="pier-input-text pier-input-text--cap-left" type="text" placeholder="Enter Text" />
    <button className="pier-button-hero pier-button-hero--cap-right">
    <span className="pier-button-hero__content">
        Submit
    </span>
</button>
</div>
    <p className="pier-input-group__validation -m-t-3">*required</p>

    </Fragment>
);
