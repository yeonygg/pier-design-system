export default (
    <div className="pier-nav">
        <h3 className="pier-heading pier-heading--sm " style={{ padding: '24px' }}>
            Navigation
        </h3>

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
    </div>
);
