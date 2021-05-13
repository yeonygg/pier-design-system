import ReactDOMServer from 'react-dom/server';
import base from './base';
import sizes from './sizes';
import dark from './dark';
import striped from './striped';

export default {
    title: 'Table',
    slug: 'table',
    description: 'This is a description for table.',
    'last-updated': '5/11/21',
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
            name: 'Striped',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(striped),
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
