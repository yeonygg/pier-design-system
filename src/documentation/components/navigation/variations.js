import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const structure = ReactDOMServer.renderToStaticMarkup(
    <div className="pier-nav">
        <h3 className="pier-heading pier-heading--sm " style={{ padding: '24px' }}>
            Navigation
        </h3>
        <div className="pier-nav__item-group">
            <div className="pier-nav__item-container">
                <span className="pier-nav__item-dropdown-toggle"></span>
                <div className="pier-nav__item">
                    <span className="pier-nav__item-icon fas fa-file"></span>Item
                </div>
                <div className="pier-nav__item-dropdown">
                    <div className="pier-nav__sub-item">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>

                    <div className="pier-nav__sub-item">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>
                </div>
            </div>
            <div className="pier-nav__item-container">
                <span className="pier-nav__item-dropdown-toggle pier-nav__item-dropdown-toggle--toggled"></span>
                <div className="pier-nav__item">
                    <span className="pier-nav__item-icon fas fa-chart-area"></span>
                    Item
                </div>
                <div className="pier-nav__item-dropdown">
                    <div className="pier-nav__sub-label">Sub-Label</div>

                    <div className="pier-nav__sub-item">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>

                    <div className="pier-nav__sub-item">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>
                </div>
            </div>

            <div className="pier-nav__item">
                <span className="pier-nav__item-icon fas fa-bread-slice"></span>Item
            </div>

            <div className="pier-nav__item-container">
                <div className="pier-nav__item-dropup">
                    <div className="pier-nav__sub-item">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>

                    <div className="pier-nav__sub-item">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>
                </div>
                <span className="pier-nav__item-dropup-toggle pier-nav__item-dropup-toggle--toggled"></span>
                <div className="pier-nav__item">
                    <span className="pier-nav__item-icon fas fa-chart-area"></span>
                    Item
                </div>
            </div>
        </div>
    </div>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
<<<<<<< HEAD
    <div className="pier-nav pier-nav--dark">
        <h3 className="pier-heading pier-heading--sm pier-heading--dark " style={{ padding: '24px' }}>
=======
    <div className="pier-nav--dark">
        <h3 className="pier-heading pier-heading--sm " style={{ padding: '24px' }}>
>>>>>>> be64a41 (added dark nav)
            Navigation
        </h3>
        <div className="pier-nav__item-group">
            <div className="pier-nav__item-container">
<<<<<<< HEAD
                <span className="pier-nav__item-dropdown-toggle pier-nav__item-dropdown-toggle--dark"></span>
                <div className="pier-nav__item pier-nav__item--dark">
=======
                <span className="pier-nav__item-dropdown-toggle"></span>
                <div className="pier-nav__item">
>>>>>>> be64a41 (added dark nav)
                    <span className="pier-nav__item-icon fas fa-file"></span>Item
                </div>
                <div className="pier-nav__item-dropdown">
                    <div className="pier-nav__sub-item">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>

                    <div className="pier-nav__sub-item">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>
                </div>
            </div>
            <div className="pier-nav__item-container">
                <span className="pier-nav__item-dropdown-toggle pier-nav__item-dropdown-toggle--toggled"></span>
<<<<<<< HEAD
                <div className="pier-nav__item pier-nav__item--dark">
                    <span className="pier-nav__item-icon fas fa-chart-area"></span>
                    Item
                </div>
                <div className="pier-nav__item-dropdown ">
                    <div className="pier-nav__sub-label">Sub-Label</div>

                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>

                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
=======
                <div className="pier-nav__item">
                    <span className="pier-nav__item-icon fas fa-chart-area"></span>
                    Item
                </div>
                <div className="pier-nav__item-dropdown">
                    <div className="pier-nav__sub-label">Sub-Label</div>

                    <div className="pier-nav__sub-item">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>

                    <div className="pier-nav__sub-item">
>>>>>>> be64a41 (added dark nav)
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>
                </div>
            </div>

<<<<<<< HEAD
            <div className="pier-nav__item pier-nav__item--dark">
=======
            <div className="pier-nav__item">
>>>>>>> be64a41 (added dark nav)
                <span className="pier-nav__item-icon fas fa-bread-slice"></span>Item
            </div>

            <div className="pier-nav__item-container">
                <div className="pier-nav__item-dropup">
<<<<<<< HEAD
                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>

                    <div className="pier-nav__sub-item pier-nav__sub-item--dark">
=======
                    <div className="pier-nav__sub-item">
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>

                    <div className="pier-nav__sub-item">
>>>>>>> be64a41 (added dark nav)
                        <div className="pier-nav__sub-item-line"></div>Sub-Item
                    </div>
                </div>
                <span className="pier-nav__item-dropup-toggle pier-nav__item-dropup-toggle--toggled"></span>
<<<<<<< HEAD
                <div className="pier-nav__item pier-nav__item--dark">
=======
                <div className="pier-nav__item">
>>>>>>> be64a41 (added dark nav)
                    <span className="pier-nav__item-icon fas fa-chart-area"></span>
                    Item
                </div>
            </div>
        </div>
    </div>
);
