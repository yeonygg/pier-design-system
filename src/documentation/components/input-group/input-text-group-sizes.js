import { Fragment } from "react";

export default (
<Fragment>
<h4 className="pier-label pier-label--sm -m-b-3">Text Input Label small</h4>
<input className="pier-input-text pier-input-text--sm" type="text" placeholder="Enter Text" />
<p className="pier-input-group__validation pier-input-group__validation--sm -m-t-2">*required</p>

<h4 className="pier-label pier-label--lg -m-b-3 -m-t-4">Text Input Label large</h4>
<input className="pier-input-text pier-input-text--lg" type="text" placeholder="Enter Text" />
<p className="pier-input-group__validation -m-t-2">*required</p>
</Fragment>
);