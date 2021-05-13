import react from 'react';
import PropTypes from 'prop-types';

export default function Table({ columns, data, hideHeader, size, striped, dark, className, style }) {
    let prefix = `pier-table`,
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

    striped && (classes += ` ${prefix}--striped`);
    dark && (classes += ` ${prefix}--dark`);

    classes += ` ${className}`;

    function renderHeader() {
        if (columns.length > 0) {
            return (
                <thead>
                    <tr className="pier-table__row">
                        {columns.map((header, index) => {
                            return (
                                <th className="pier-table__header" key={index}>
                                    {header}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
            );
        }
    }

    return (
        <table className={classes} style={style}>
            {!hideHeader && renderHeader()}
            <tbody>
                {data.map((row, index) => {
                    return (
                        <tr className="pier-table__row" key={index}>
                            {columns.map((cell, index) => {
                                return <td className="pier-table__cell">{row[cell]}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

Table.defaultProps = {
    className: '',
};

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    hideHeader: PropTypes.bool,
    size: PropTypes.string,
    striped: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};
