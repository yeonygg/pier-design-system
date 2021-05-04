import react from 'react';
import PropTypes from 'prop-types';

export default function InputRadio({ children, name, checked, value, onChange, size, disabled, error, dark, className, style }) {
    let prefix = `pier-input-radio`,
        classes = prefix;

    switch (size) {
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

    error && (classes += ` ${prefix}--error`);
    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);

    classes += ` ${className}`;

    return (
        <label className={classes} style={style}>
            <input type="radio" className={prefix + '__input'} name={name} value={value} checked={checked} onChange={onChange} />
            <div className={prefix + '__indicator'}></div>
            <span className={prefix + '__label'}>{children}</span>
        </label>
    );
}

InputRadio.defaultProps = {
    size: 'md',
    className: '',
};

InputRadio.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    checked: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
