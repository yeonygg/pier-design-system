import { Fragment } from "react";

export default (
<Fragment>
<label className="pier-input-radio pier-input-radio--md pier-input-radio--dark">
<input
  className="pier-input-radio__input"
  type="radio"
  name="example-4"
  value=""
/>

<div className="pier-input-radio__indicator"></div>
<span className="pier-input-radio__label">Label</span>
</label>

<label className="pier-input-radio pier-input-radio--md pier-input-radio--dark">
<input
  className="pier-input-radio__input"
  checked type="radio"
  name="example-4"
  value=""
/>

<div className="pier-input-radio__indicator"></div>
<span className="pier-input-radio__label">Label</span>
</label>
</Fragment>
);
