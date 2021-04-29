import react from 'react';
import PropTypes from 'prop-types';

export default function InputTextArea({ name, placeholder, value, onChange, size, disabled, cap, pill, error, dark, resize, className, style }) {
    let prefix = `pier-input-textarea`,
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

    switch (resize) {
        case 'auto':
            classes += ` ${prefix}--auto`;
            break;
        case 'horizontal':
            classes += ` ${prefix}--h`;
            break;
        case 'vertical':
            classes += ``;
            break;
    }

    pill && (classes += ` ${prefix}--pill`);
    error && (classes += ` ${prefix}--error`);
    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);

    classes += ` ${className}`;

    return <textarea name={name} className={classes} style={style} placeholder={placeholder} value={value} onChange={onChange}></textarea>;
}

InputTextArea.defaultProps = {
    size: 'md',
    className: '',
};

InputTextArea.propTypes = {
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
