import ReactDOMServer from 'react-dom/server';
import base from './base';
import incard from './incard';
import open from './open';
import dark from './dark';
import disabled from './disabled';
import sizes from './sizes';

export default {
    title: 'Accordion',
    slug: 'accordion',
    description: 'This is a description for accordion.',
    'last-updated': '5/17/21',
    variations: [
        {
            name: 'Base',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(base),
            dark: false,
        },
        {
            name: 'Open',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(open),
            dark: false,
        },
        {
            name: 'In Card',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(incard),
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
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(dark),
            dark: true,
        },
    ],
};
