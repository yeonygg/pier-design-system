import react from 'react';
import PropTypes from 'prop-types';

export default function InputCheckbox({ children, name, checked, indeterminate, value, onChange, size, disabled, error, dark, className, style }) {
    let prefix = `pier-input-checkbox`,
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
            <input
                type="checkbox"
                className="pier-input-checkbox__input"
                name={name}
                value={value}
                checked={checked}
                indeterminate={indeterminate}
                onChange={onChange}
            />
            <div className="pier-input-checkbox__indicator"></div>
            <span className="pier-input-checkbox__label">{children}</span>
        </label>
    );
}

InputCheckbox.defaultProps = {
    size: 'md',
    className: '',
};

InputCheckbox.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.function,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
