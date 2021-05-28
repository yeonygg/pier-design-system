import PropTypes from 'prop-types';

function InputSelect({ children, name, value, onChange, size, disabled, cap, pill, error, dark, className, style }) {
    let prefix = `pier-input-select`,
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
        <select name={name} className={classes} style={style} value={value} onChange={onChange}>
            {children}
        </select>
    );
}

InputSelect.defaultProps = {
    size: 'md',
    cap: 'cap',
};

InputSelect.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    cap: PropTypes.oneOf(['cap', 'none', 'right', 'left']),
    pill: PropTypes.bool,
    error: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default InputSelect;
