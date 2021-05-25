import { Fragment } from 'react';

export default (
    <Fragment>
        <div className="-d-flex -justify-content-center -align-items-center" style={{ height: '1000px' }}>
            <div style={{ width: '50px', height: '50px', background: 'red' }}>
                <div className="pier-bubble-menu pier-bubble-menu--open">
                    <div className="pier-bubble-menu__label">Alerts</div>
                    <div className="pier-bubble-menu__item">Alert 1</div>
                    <div className="pier-bubble-menu__item">Alert 2</div>
                    <div className="pier-bubble-menu__item">Alert 3</div>
                    <div className="pier-bubble-menu__item pier-bubble-menu__item--divider">Clear Alerts</div>
                </div>
            </div>
        </div>
    </Fragment>
);
