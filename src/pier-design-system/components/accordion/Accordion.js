import PropTypes from 'prop-types';
import { useState } from 'react';

function Accordion({ children, title, startOpen, inCard, icon, size, disabled, dark, onClick, className, style }) {
    const [open, setOpen] = useState(startOpen);

    let prefix = `pier-accordion`,
        classes = prefix;

    switch (size) {
        case 'xs':
            classes += ` ${prefix}--xs`;
            break;
        case 'sm':
            classes += ` ${prefix}--sm`;
            break;
        case 'md':
            classes += ``;
            break;
        case 'lg':
            classes += ` ${prefix}--lg`;
            break;
    }

    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);
    inCard && (classes += ` ${prefix}--card`);
    open && (classes += ` ${prefix}--open`);

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            <div
                className="pier-accordion__title"
                onClick={() => {
                    setOpen(!open);
                    onClick && onClick();
                }}
            >
                <h1 className="pier-accordion__heading">
                    {icon && <i className={`pier-accordion__icon ${icon}`}></i>}
                    {title}
                </h1>
            </div>
            <div className="pier-accordion__content">{children}</div>
        </div>
    );
}

Accordion.defaultProps = {
    size: 'md',
};

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    startOpen: PropTypes.bool,
    inCard: PropTypes.bool,
    icon: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    dark: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Accordion;
