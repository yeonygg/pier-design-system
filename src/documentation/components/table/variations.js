import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <table className="pier-table">
        <thead>
            <tr className="pier-table__row">
                <th className="pier-table__header">Name</th>
                <th className="pier-table__header">Email</th>
                <th className="pier-table__header">Age</th>
            </tr>
        </thead>
        <tbody>
            <tr className="pier-table__row">
                <td className="pier-table__cell">Pete Pink</td>
                <td className="pier-table__cell">pink@yahoo.com</td>
                <td className="pier-table__cell">23</td>
            </tr>
            <tr className="pier-table__row">
                <td className="pier-table__cell">Blair Blue</td>
                <td className="pier-table__cell">blue@yahoo.com</td>
                <td className="pier-table__cell">32</td>
            </tr>
            <tr className="pier-table__row">
                <td className="pier-table__cell">Vicky Violet</td>
                <td className="pier-table__cell">violet@yahoo.com</td>
                <td className="pier-table__cell">18</td>
            </tr>
        </tbody>
    </table>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <table className="pier-table pier-table--sm">
            <thead>
                <tr className="pier-table__row">
                    <th className="pier-table__header">Name</th>
                    <th className="pier-table__header">Email</th>
                    <th className="pier-table__header">Age</th>
                </tr>
            </thead>
            <tbody>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Pete Pink</td>
                    <td className="pier-table__cell">pink@yahoo.com</td>
                    <td className="pier-table__cell">23</td>
                </tr>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Blair Blue</td>
                    <td className="pier-table__cell">blue@yahoo.com</td>
                    <td className="pier-table__cell">32</td>
                </tr>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Vicky Violet</td>
                    <td className="pier-table__cell">violet@yahoo.com</td>
                    <td className="pier-table__cell">18</td>
                </tr>
            </tbody>
        </table>
        <table className="pier-table pier-table--md">
            <thead>
                <tr className="pier-table__row">
                    <th className="pier-table__header">Name</th>
                    <th className="pier-table__header">Email</th>
                    <th className="pier-table__header">Age</th>
                </tr>
            </thead>
            <tbody>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Pete Pink</td>
                    <td className="pier-table__cell">pink@yahoo.com</td>
                    <td className="pier-table__cell">23</td>
                </tr>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Blair Blue</td>
                    <td className="pier-table__cell">blue@yahoo.com</td>
                    <td className="pier-table__cell">32</td>
                </tr>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Vicky Violet</td>
                    <td className="pier-table__cell">violet@yahoo.com</td>
                    <td className="pier-table__cell">18</td>
                </tr>
            </tbody>
        </table>
        <table className="pier-table pier-table--lg">
            <thead>
                <tr className="pier-table__row">
                    <th className="pier-table__header">Name</th>
                    <th className="pier-table__header">Email</th>
                    <th className="pier-table__header">Age</th>
                </tr>
            </thead>
            <tbody>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Pete Pink</td>
                    <td className="pier-table__cell">pink@yahoo.com</td>
                    <td className="pier-table__cell">23</td>
                </tr>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Blair Blue</td>
                    <td className="pier-table__cell">blue@yahoo.com</td>
                    <td className="pier-table__cell">32</td>
                </tr>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Vicky Violet</td>
                    <td className="pier-table__cell">violet@yahoo.com</td>
                    <td className="pier-table__cell">18</td>
                </tr>
            </tbody>
        </table>
    </Fragment>
);

export const striped = ReactDOMServer.renderToStaticMarkup(
    <table className="pier-table pier-table--striped">
        <thead>
            <tr className="pier-table__row">
                <th className="pier-table__header">Name</th>
                <th className="pier-table__header">Email</th>
                <th className="pier-table__header">Age</th>
            </tr>
        </thead>
        <tbody>
            <tr className="pier-table__row">
                <td className="pier-table__cell">Pete Pink</td>
                <td className="pier-table__cell">pink@yahoo.com</td>
                <td className="pier-table__cell">23</td>
            </tr>
            <tr className="pier-table__row">
                <td className="pier-table__cell">Blair Blue</td>
                <td className="pier-table__cell">blue@yahoo.com</td>
                <td className="pier-table__cell">32</td>
            </tr>
            <tr className="pier-table__row">
                <td className="pier-table__cell">Vicky Violet</td>
                <td className="pier-table__cell">violet@yahoo.com</td>
                <td className="pier-table__cell">18</td>
            </tr>
        </tbody>
    </table>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <Fragment>
        <table className="pier-table pier-table--dark">
            <thead>
                <tr className="pier-table__row">
                    <th className="pier-table__header">Name</th>
                    <th className="pier-table__header">Email</th>
                    <th className="pier-table__header">Age</th>
                </tr>
            </thead>
            <tbody>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Pete Pink</td>
                    <td className="pier-table__cell">pink@yahoo.com</td>
                    <td className="pier-table__cell">23</td>
                </tr>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Blair Blue</td>
                    <td className="pier-table__cell">blue@yahoo.com</td>
                    <td className="pier-table__cell">32</td>
                </tr>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Vicky Violet</td>
                    <td className="pier-table__cell">violet@yahoo.com</td>
                    <td className="pier-table__cell">18</td>
                </tr>
            </tbody>
        </table>
        <table className="pier-table pier-table--dark pier-table--striped">
            <thead>
                <tr className="pier-table__row">
                    <th className="pier-table__header">Name</th>
                    <th className="pier-table__header">Email</th>
                    <th className="pier-table__header">Age</th>
                </tr>
            </thead>
            <tbody>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Pete Pink</td>
                    <td className="pier-table__cell">pink@yahoo.com</td>
                    <td className="pier-table__cell">23</td>
                </tr>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Blair Blue</td>
                    <td className="pier-table__cell">blue@yahoo.com</td>
                    <td className="pier-table__cell">32</td>
                </tr>
                <tr className="pier-table__row">
                    <td className="pier-table__cell">Vicky Violet</td>
                    <td className="pier-table__cell">violet@yahoo.com</td>
                    <td className="pier-table__cell">18</td>
                </tr>
            </tbody>
        </table>
    </Fragment>
);
