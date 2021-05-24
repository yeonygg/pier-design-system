import { Fragment } from 'react';

export default (
    <Fragment>
    <div className="-justify-content-left -align-items-top" style={{height: "280px"}}>
        <div className="pier-nav-container">
            <button className="pier-button-icon">
                <i className="far fa-bell pier-button-icon__icon"></i>
            </button>
            <div className="pier-bubble-menu">
                <ul className="pier-bubble-menu--list">
                    <li>
                        <div className="pier-bubble-menu--list-link"  tabIndex="0">Alert 1</div>
                    </li>
                    <li>
                        <div className="pier-bubble-menu--list-link"  tabIndex="0">Alert 2</div>
                    </li>
                    <li>
                        <div className="pier-bubble-menu--list-link"  tabIndex="0">Alert 3</div>
                    </li>
                    <li className="pier-bubble-menu--list-divider"></li>
                    <li>
                        <div className="pier-bubble-menu--list-link"  tabIndex="0">Clear Alerts</div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </Fragment>
);
