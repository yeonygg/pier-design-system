import PropTypes from 'prop-types';
import { useState } from 'react';

function NavItemContainer({ children, startToggled, onClick, className, style, dark }) {
    const [toggled, setToggled] = useState(startToggled);

    var prefix = 'pier-nav__item-container',
        classes = prefix;

    var togglePrefix = 'pier-nav__item-dropdown-toggle',
        toggleClasses = togglePrefix;

    dark && (toggleClasses += ` ${togglePrefix}--dark`);

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            <span
                className={!toggled ? `${toggleClasses}` : `${toggleClasses} pier-nav__item-dropdown-toggle--toggled`}
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
    dark: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default NavItemContainer;
