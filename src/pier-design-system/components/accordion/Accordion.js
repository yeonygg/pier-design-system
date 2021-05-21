import react from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Button({ children, title, startOpen, inCard, icon, size, disabled, dark, className, style }) {
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

    classes += ` ${className}`;

    return (
        <div className={classes} style={style}>
            <div className="pier-accordion__title" onClick={() => setOpen(!open)}>
                <h1 className="pier-accordion__heading">
                    {icon && <i className={`pier-accordion__icon ${icon}`}></i>}
                    {title}
                </h1>
            </div>
            <div className="pier-accordion__content">{children}</div>
        </div>
    );
}

Button.defaultProps = {
    startOpen: false,
    size: 'md',
    className: '',
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    startOpen: PropTypes.bool,
    inCard: PropTypes.bool,
    icon: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
