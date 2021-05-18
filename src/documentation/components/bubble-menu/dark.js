import { Fragment } from 'react';

export default (
    <Fragment>
    <div className="-justify-content-center -align-items-center" style={{height: "270px"}}>
        <div className="pier-nav-container">
            <button className="pier-button-icon pier-button-icon--dark">
                <i className="far fa-bell pier-button-icon__icon"></i>
            </button>
            <div className="pier-bubble-menu">
                <ul className="pier-bubble-menu--list pier-bubble-menu--list-dark">
                    <li>
                        <div className="pier-bubble-menu--list-link pier-bubble-menu--list-link-dark">Alert 1</div>
                    </li>
                    <li>
                        <div className="pier-bubble-menu--list-link pier-bubble-menu--list-link-dark">Alert 2</div>
                    </li>
                    <li>
                        <div className="pier-bubble-menu--list-link pier-bubble-menu--list-link-dark">Alert 3</div>
                    </li>
                    <li className="pier-bubble-menu--list-divider pier-bubble-menu--list-divider-dark"></li>
                    <li>
                        <div className="pier-bubble-menu--list-link pier-bubble-menu--list-link-dark">Clear Alerts</div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </Fragment>
);
