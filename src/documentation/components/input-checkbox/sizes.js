import { Fragment } from "react";

export default ( 
	<Fragment>

	<label className="pier-input-checkbox pier-input-checkbox--md">
	<input
	  className="pier-input-checkbox__input"
	  type="checkbox"
	  name="example-1"
	  value=""
	/>

	<div className="pier-input-checkbox__indicator"></div>
	<span className="pier-input-checkbox__label">Label</span>
  </label>

  <label className="pier-input-checkbox pier-input-checkbox--lg">
	<input
	  className="pier-input-checkbox__input"
	  type="checkbox"
	  name="example-1"
	  value=""
	/>

	<div className="pier-input-checkbox__indicator pier-input-checkbox__indicator--lg"></div>
	<span className="pier-input-checkbox__label">Label</span>
  </label>

	</Fragment>
);