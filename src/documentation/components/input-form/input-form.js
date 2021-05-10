import { Fragment } from "react";

export default (
<Fragment>
<h4 className="pier-label pier-label--sm -m-b-3">Name</h4>
<input className="pier-input-text -m-b-7" type="text" placeholder="Enter Text" />

<h4 className="pier-label pier-label--sm -m-b-3">Select</h4>
<select className="pier-input-select -m-b-7" required>
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

<h4 className="pier-label pier-label--sm -m-b-3">Text Input Label</h4>
<textarea className="pier-input-textarea" placeholder="Enter Text"></textarea>

</Fragment>
);