import { Fragment } from "react";

export default (
<Fragment>
<div className="pier-input-group">
<h4 className="pier-label pier-label--md -m-b-2">Radio Input Label</h4>
<label className="pier-input-radio">
<input className="pier-input-radio__input" type="radio" name="example-1" value="" onChange=""/>
<div className="pier-input-radio__indicator"></div>
<span className="pier-input-radio__label">Label</span>
</label>
<label className="pier-input-radio -m-l-5">
<input className="pier-input-radio__input" type="radio" name="example-1" value="" />
<div className="pier-input-radio__indicator"></div>
<span className="pier-input-radio__label">Label</span>
</label>
<label className="pier-input-radio -m-l-5">
<input className="pier-input-radio__input" type="radio" name="example-1" value="" />
<div className="pier-input-radio__indicator"></div>
<span className="pier-input-radio__label">Label</span>
</label>
<p className="pier-input-group__validation -m-t-2">*required</p>
</div>
</Fragment>
);