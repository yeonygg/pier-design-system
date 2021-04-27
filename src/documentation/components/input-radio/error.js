import { Fragment } from "react";

export default (
	<Fragment>
	<label className="pier-input-radio pier-input-radio--error pier-input-radio--md">
	<input
	  className="pier-input-radio__input"
	  type="radio"
	  name="example-3"
	  value=""
	/>

	<div className="pier-input-radio__indicator"></div>
	<span className="pier-input-radio__label">Label</span>
  </label>

  <label className="pier-input-radio pier-input-radio--error pier-input-radio--md">
  <input
	className="pier-input-radio__input"
	checked type="radio"
	name="example-3"
	value=""
  />

  <div className="pier-input-radio__indicator"></div>
  <span className="pier-input-radio__label">Label</span>
</label>

	</Fragment>
);
