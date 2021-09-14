import PropTypes from 'prop-types';

function InputCombo({ children, className, style }) {
    let prefix = `pier-input-combo`,
        classes = prefix;

    className && (classes += ` ${className}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
}

InputCombo.defaultProps = {};

InputCombo.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default InputCombo;
