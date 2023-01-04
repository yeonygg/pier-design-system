import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import IconButton from '../buttons/IconButton';

function Nav({ children, width, mobile, dark, isCollapsible, className, style }) {
    const [minNav, setMinNav] = useState(false);
    const [navWidth, setNavWidth] = useState(`${width}px`);

    const minNavWidth = '8px';

    const desktopNav = {
        width: navWidth,
        position: 'relative',
        zIndex: '99',
        transition: 'all 0.2s ease-in-out',
    };

    function mouseEnter() {
        if (minNav) {
            setNavWidth('12px');
        } else {
            setNavWidth(`${width - 2}px`);
        }
    }

    function mouseLeave() {
        if (minNav) {
            setNavWidth(minNavWidth);
        } else {
            setNavWidth(`${width}px`);
        }
    }

    let prefix = 'pier-nav',
        classes = prefix;

    mobile && (classes += ` ${prefix}--mobile`);
    dark && (classes += ` ${prefix}--dark`);
    className && (classes += ` ${className}`);

    return (
        <Fragment>
            {mobile ? (
                <div className={classes} style={style}>
                    {children}
                </div>
            ) : (
                <div
                    className={classes}
                    style={desktopNav}
                    onMouseOver={() => {
                        if (minNav) mouseEnter();
                    }}
                    onMouseLeave={mouseLeave}
                >
                    {isCollapsible && (
                        <div style={{ position: 'absolute', right: '-12px', top: '12px', zIndex: 999 }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                            <IconButton
                                size="xs"
                                secondary
                                icon="fas fa-chevron-left"
                                onClick={() => {
                                    if (!minNav) {
                                        setNavWidth(minNavWidth);
                                    } else {
                                        setNavWidth(width);
                                    }
                                    setMinNav(!minNav);
                                }}
                                iconStyle={minNav ? { transform: 'rotate(180deg)' } : {}}
                            ></IconButton>
                        </div>
                    )}
                    <div className={classes} style={style}>
                        <div style={minNav ? { width: `${width}px`, height: '100%', pointerEvents: 'none' } : { width: `${width}px`, height: '100%' }}>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

Nav.defaultProps = {
    width: 260,
};

Nav.propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.number,
    mobile: PropTypes.bool,
    isCollapsible: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Nav;
