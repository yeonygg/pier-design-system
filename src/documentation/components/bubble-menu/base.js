import { Fragment } from 'react';

export default (
    <Fragment>

        <button className="pier-button-icon">
            <i className="far fa-bell pier-button-icon__icon"></i>
        </button>
        <div className="pier-bubble-menu">
        <ul className="pier-bubble-menu--list">
        <li><div class="pier-bubble-menu--list-link">Alert 1</div></li>
        <li><div class="pier-bubble-menu--list-link">Alert 2</div></li>
        <li><div class="pier-bubble-menu--list-link">Alert 3</div></li>
        <li class="pier-bubble-menu--list-divider"></li>
        <li><div class="pier-bubble-menu--list-link">Clear Alerts</div></li>
      </ul>
      </div>
    </Fragment>
);
