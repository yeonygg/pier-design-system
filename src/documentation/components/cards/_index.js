import ReactDOMServer from 'react-dom/server';
import base from './base';
import link from './link';
import sizes from './sizes';
import color from './color';
import dark from './dark';

export default {
    title: 'Cards',
    slug: 'cards',
    description: 'This is a description for cards.',
    'last-updated': '3/24/21',
    variations: [
        {
            name: 'Base',
            description: 'These are the size modifiers.',
            markup: ReactDOMServer.renderToStaticMarkup(base),
            dark: false,
        },
        {
            name: 'Link',
            description: 'These are the link modifiers.',
            markup: ReactDOMServer.renderToStaticMarkup(link),
            name: 'Sizes',
            description: 'These are the size modifiers.',
            markup: ReactDOMServer.renderToStaticMarkup(sizes),
            dark: false,
        },
        {
            name: 'Color',
            description: 'These are the color modifiers.',
            markup: ReactDOMServer.renderToStaticMarkup(color),
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
