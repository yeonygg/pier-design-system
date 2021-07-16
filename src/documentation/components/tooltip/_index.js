import ReactDOMServer from 'react-dom/server';
import base from './base';
import bottom from './bottom';
import right from './right';
import left from './left';
import size from './size';
import dark from './dark';

export default {
    title: 'Tooltip',
    slug: 'tooltip',
    description: 'This is a description for tooltips.',
    'last-updated': '3/30/21',
    variations: [
        {
            name: 'Base',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(base),
            dark: false,
        },
        {
            name: 'Bottom',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(bottom),
            dark: false,
        },
        {
            name: 'Left',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(left),
            dark: false,
        },
        {
            name: 'Right',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(right),
            dark: false,
        },
        {
            name: 'Dark',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(dark),
            dark: true,
        },
        {
            name: 'Size',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(size),
            dark: false,
        },
    ],
};
