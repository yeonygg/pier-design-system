import ReactDOMServer from 'react-dom/server';
import base from './base';
import sizes from './sizes';
import dark from './dark';

export default {
    title: 'Bubble menu',
    slug: 'bubble menu',
    description: 'This is a description for buttons.',
    'last-updated': '3/30/21',
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
            name: 'Dark',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(dark),
            dark: true,
        },
    ],
};