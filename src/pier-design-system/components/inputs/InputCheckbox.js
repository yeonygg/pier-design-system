import PropTypes from 'prop-types';

function InputCheckbox({ children, name, checked, indeterminate, value, onChange, size, disabled, error, dark, className, style }) {
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

    className && (classes += ` ${className}`);

    return (
        <label className={classes} style={style}>
            <input
                type="checkbox"
                className={prefix + '__input'}
                name={name}
                value={value}
                checked={checked}
                indeterminate={indeterminate}
                onChange={onChange}
            />
            <div className={prefix + '__indicator'}></div>
            {children && <span className={prefix + '__label'}>{children}</span>}
        </label>
    );
}

InputCheckbox.defaultProps = {
    size: 'md',
};

InputCheckbox.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default InputCheckbox;
