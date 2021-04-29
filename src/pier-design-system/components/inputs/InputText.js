import react from 'react';
import PropTypes from 'prop-types';

export default function InputText({ type, name, placeholder, value, onChange, size, disabled, cap, pill, error, dark, className, style }) {
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

    classes += ` ${className}`;

    return <input name={name} type={type || 'text'} className={classes} style={style} placeholder={placeholder} value={value} onChange={onChange}></input>;
}

InputText.defaultProps = {
    size: 'md',
    className: '',
};

InputText.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.function,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    cap: PropTypes.string,
    pill: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
