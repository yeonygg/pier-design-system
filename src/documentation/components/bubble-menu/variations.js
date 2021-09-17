import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="-d-flex -justify-content-center -align-items-center" style={{ height: '600px' }}>
            <div>
                <button className="pier-button-icon">
                    <i className="fas fa-pen pier-button-icon__icon"></i>
                </button>
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

export const position = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="-d-flex -justify-content-center -align-items-center" style={{ height: '600px' }}>
            <div>
                <button className="pier-button-icon">
                    <i className="fas fa-pen pier-button-icon__icon"></i>
                </button>
                <div className="pier-bubble-menu pier-bubble-menu--top-left pier-bubble-menu--open">
                    <div className="pier-bubble-menu__label">Alerts</div>
                    <div className="pier-bubble-menu__item">Alert 1</div>
                    <div className="pier-bubble-menu__item">Alert 2</div>
                    <div className="pier-bubble-menu__item">Alert 3</div>
                    <div className="pier-bubble-menu__item pier-bubble-menu__item--divider">Clear Alerts</div>
                </div>
            </div>
        </div>
        <div className="-d-flex -justify-content-center -align-items-center" style={{ height: '600px' }}>
            <div>
                <button className="pier-button-icon">
                    <i className="fas fa-pen pier-button-icon__icon"></i>
                </button>
                <div className="pier-bubble-menu pier-bubble-menu--top-right pier-bubble-menu--open">
                    <div className="pier-bubble-menu__label">Alerts</div>
                    <div className="pier-bubble-menu__item">Alert 1</div>
                    <div className="pier-bubble-menu__item">Alert 2</div>
                    <div className="pier-bubble-menu__item">Alert 3</div>
                    <div className="pier-bubble-menu__item pier-bubble-menu__item--divider">Clear Alerts</div>
                </div>
            </div>
        </div>
        <div className="-d-flex -justify-content-center -align-items-center" style={{ height: '600px' }}>
            <div>
                <button className="pier-button-icon">
                    <i className="fas fa-pen pier-button-icon__icon"></i>
                </button>
                <div className="pier-bubble-menu pier-bubble-menu--bottom-left pier-bubble-menu--open">
                    <div className="pier-bubble-menu__label">Alerts</div>
                    <div className="pier-bubble-menu__item">Alert 1</div>
                    <div className="pier-bubble-menu__item">Alert 2</div>
                    <div className="pier-bubble-menu__item">Alert 3</div>
                    <div className="pier-bubble-menu__item pier-bubble-menu__item--divider">Clear Alerts</div>
                </div>
            </div>
        </div>
        <div className="-d-flex -justify-content-center -align-items-center" style={{ height: '600px' }}>
            <div>
                <button className="pier-button-icon">
                    <i className="fas fa-pen pier-button-icon__icon"></i>
                </button>
                <div className="pier-bubble-menu pier-bubble-menu--bottom-right pier-bubble-menu--open">
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

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="-d-flex -justify-content-center -align-items-center" style={{ height: '600px' }}>
            <div>
                <button className="pier-button-icon pier-button-icon--sm">
                    <i className="fas fa-pen pier-button-icon__icon"></i>
                </button>
                <div className="pier-bubble-menu pier-bubble-menu--sm pier-bubble-menu--open">
                    <div className="pier-bubble-menu__label">Alerts</div>
                    <div className="pier-bubble-menu__item">Alert 1</div>
                    <div className="pier-bubble-menu__item">Alert 2</div>
                    <div className="pier-bubble-menu__item">Alert 3</div>
                    <div className="pier-bubble-menu__item pier-bubble-menu__item--divider">Clear Alerts</div>
                </div>
            </div>
        </div>
        <div className="-d-flex -justify-content-center -align-items-center" style={{ height: '600px' }}>
            <div>
                <button className="pier-button-icon pier-button-icon--md">
                    <i className="fas fa-pen pier-button-icon__icon"></i>
                </button>
                <div className="pier-bubble-menu pier-bubble-menu--md pier-bubble-menu--open">
                    <div className="pier-bubble-menu__label">Alerts</div>
                    <div className="pier-bubble-menu__item">Alert 1</div>
                    <div className="pier-bubble-menu__item">Alert 2</div>
                    <div className="pier-bubble-menu__item">Alert 3</div>
                    <div className="pier-bubble-menu__item pier-bubble-menu__item--divider">Clear Alerts</div>
                </div>
            </div>
        </div>
        <div className="-d-flex -justify-content-center -align-items-center" style={{ height: '600px' }}>
            <div>
                <button className="pier-button-icon pier-button-icon--lg">
                    <i className="fas fa-pen pier-button-icon__icon"></i>
                </button>
                <div className="pier-bubble-menu pier-bubble-menu--lg pier-bubble-menu--open">
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

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <div className="-d-flex -justify-content-center -align-items-center" style={{ height: '600px' }}>
            <div>
                <button className="pier-button-icon pier-button-icon--dark">
                    <i className="fas fa-pen pier-button-icon__icon"></i>
                </button>
                <div className="pier-bubble-menu pier-bubble-menu--dark pier-bubble-menu--open">
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
