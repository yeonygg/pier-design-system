import ReactDOMServer from 'react-dom/server';
import base from './base';
import ellipsis from './ellipsis';
import dark from './dark';

export default {
    title: 'Breadcrumbs',
    slug: 'breadcrumbs',
    description: 'This is a description for breadcrumbs.',
    'last-updated': '3/24/21',
    variations: [
        {
            name: 'Base',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(base),
            dark: false,
        },
        {
            name: 'With Ellipsis',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(ellipsis),
            dark: false,
        },
        {
            name: 'Dark',
            description: 'This is the dark modifier.',
            markup: ReactDOMServer.renderToStaticMarkup(dark),
            dark: true,
        },
    ],
};
