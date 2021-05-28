import ReactDOMServer from 'react-dom/server';
import base from './base';
import sizes from './sizes';
import disabled from './disabled';
import dark from './dark';

export default {
    title: 'Text - Link',
    slug: 'text-link',
    description: 'This is a description for link.',
    'last-updated': '3/25/21',
    variations: [
        {
            name: 'Base',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(base),
            dark: false,
        },
        {
            name: 'Sizes',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(sizes),
            dark: false,
        },
        {
            name: 'Disabled',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(disabled),
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
