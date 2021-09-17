import PropTypes from 'prop-types';
import { useState } from 'react';

function NavItemContainer({ children, startToggled, onClick, className, style }) {
    const [toggled, setToggled] = useState(startToggled);

    var prefix = 'pier-nav__item-container',
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            <span
                className={!toggled ? 'pier-nav__item-dropdown-toggle' : 'pier-nav__item-dropdown-toggle pier-nav__item-dropdown-toggle--toggled'}
                onClick={() => {
                    setToggled(!toggled);
                    onClick && onClick();
                }}
            ></span>
            {children}
        </div>
    );
}

NavItemContainer.defaultProps = {};

NavItemContainer.propTypes = {
    children: PropTypes.node.isRequired,
    startToggled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default NavItemContainer;
