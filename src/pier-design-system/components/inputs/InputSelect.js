import PropTypes from 'prop-types';

function InputSelect({
    children,
    name,
    value,
    defaultValue,
    onChange,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    size,
    disabled,
    cap,
    pill,
    error,
    dark,
    className,
    style,
}) {
    let prefix = `pier-input-select`,
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

    pill && (classes += ` ${prefix}--pill`);
    error && (classes += ` ${prefix}--error`);
    dark && (classes += ` ${prefix}--dark`);
    disabled && (classes += ` ${prefix}--disabled`);

    className && (classes += ` ${className}`);

    return (
        <select
            name={name}
            className={classes}
            style={style}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </select>
    );
}

InputSelect.defaultProps = {
    size: 'md',
    cap: 'none',
};

InputSelect.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    cap: PropTypes.oneOf(['cap', 'none', 'right', 'left']),
    pill: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default InputSelect;
