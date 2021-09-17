import PropTypes from 'prop-types';
import { Fragment } from 'react';

function Breadcrumbs({ children, maxCrumbs, dark, className, style }) {
    let prefix = 'pier-breadcrumbs',
        classes = prefix;

    maxCrumbs = Math.floor(maxCrumbs);

    dark && (classes += ` ${prefix}--dark`);

    className && (classes += ` ${className}`);

    const getLastCrumbs = () => {
        let lastCrumbs = [];
        for (let x = 0; x < children.length; x++) {
            if (x + maxCrumbs - 1 >= children.length) {
                lastCrumbs.push(children[x]);
            }
        }
        return lastCrumbs;
    };

    return (
        <div className={classes} style={style}>
            {isNaN(maxCrumbs) || maxCrumbs < 2 || maxCrumbs > children.length ? (
                <Fragment>{children}</Fragment>
            ) : (
                <Fragment>
                    {children[0]}
                    <div className="pier-breadcrumbs__crumb">
                        <span className="pier-breadcrumbs__ellipsis" />
                    </div>
                    {getLastCrumbs()}
                </Fragment>
            )}
        </div>
    );
}

Breadcrumbs.defaultProps = {};

Breadcrumbs.propTypes = {
    children: PropTypes.node.isRequired,
    maxCrumbs: PropTypes.number,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Breadcrumbs;
