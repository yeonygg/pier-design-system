import PropTypes from 'prop-types';

function InputText({ type, name, placeholder, value, onChange, onFocus, onBlur, size, disabled, cap, pill, error, dark, className, style }) {
    let prefix = `pier-input-text`,
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

    switch (cap) {
        case 'cap':
            classes += ``;
            break;
        case 'right':
            classes += ` ${prefix}--cap-right`;
            break;
        case 'left':
            classes += ` ${prefix}--cap-left`;
            break;
        case 'none':
            classes += ` ${prefix}--cap-none`;
            break;
    }

    pill && (classes += ` ${prefix}--pill`);
    error && (classes += ` ${prefix}--error`);
    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);

    className && (classes += ` ${className}`);

    return (
        <input
            name={name}
            type={type || 'text'}
            className={classes}
            style={style}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        ></input>
    );
}

InputText.defaultProps = {
    size: 'md',
    cap: 'cap',
};

InputText.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    cap: PropTypes.oneOf(['cap', 'none', 'right', 'left']),
    pill: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default InputText;
