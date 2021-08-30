import PropTypes from 'prop-types';

function InputTextArea({
    name,
    placeholder,
    value,
    onChange,
    onFocus,
    onBlur,
    size,
    disabled,
    cap,
    pill,
    error,
    dark,
    resize,
    className,
    style,
    onChange,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onHover,
    onBlur,
}) {
    let prefix = `pier-input-textarea`,
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

    switch (cap) {
        case 'none':
            classes += ``;
            break;
        case 'right':
            classes += ` ${prefix}--cap-right`;
            break;
        case 'left':
            classes += ` ${prefix}--cap-left`;
            break;
        case 'cap':
            classes += ` ${prefix}--cap`;
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

    className && (classes += ` ${className}`);

    return (
        <textarea
            name={name}
            className={classes}
            style={style}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        ></textarea>
    );
}

InputTextArea.defaultProps = {
    size: 'md',
    cap: 'none',
    resize: 'vertical',
};

InputTextArea.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    cap: PropTypes.oneOf(['cap', 'none', 'right', 'left']),
    pill: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    resize: PropTypes.oneOf(['auto', 'horizontal', 'vertical']),
    className: PropTypes.string,
    style: PropTypes.object,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onHover: PropTypes.func,
};

export default InputTextArea;
