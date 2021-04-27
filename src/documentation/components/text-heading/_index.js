import ReactDOMServer from 'react-dom/server';
import base from './base';
import sizes from './sizes';
import dark from './dark';

export default {
    title: 'Text - Heading',
    slug: 'text-heading',
    description: 'This is a description for Text - Heading.',
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
            name: 'Dark',
            description: 'This is the dark modifier.',
            markup: ReactDOMServer.renderToStaticMarkup(dark),
            dark: true,
        },
    ],
};
