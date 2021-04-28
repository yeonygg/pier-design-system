import ReactDOMServer from 'react-dom/server';
import base from './base';
import sizes from './sizes';
import auto from './auto';
import horizontal from './horizontal';
import textDisabled from './text-disabled';
import disabled from './disabled';
import error from './error';
import dark from './dark';
import darkError from './dark-error';

export default {
    title: 'Input - Textarea',
    slug: 'input-textarea',
    description: 'This is a description for input-textarea.',
    'last-updated': '4/6/21',
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
            name: 'Automatic',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(auto),
            dark: false,
        },
        {
            name: 'Horizontal',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(horizontal),
            dark: false,
        },
        {
            name: 'Text Disabled',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(textDisabled),
            dark: false,
        },
        {
            name: 'Disabled',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(disabled),
            dark: false,
        },
        {
            name: 'Error',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(error),
            dark: false,
        },
        {
            name: 'Dark',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(dark),
            dark: true,
        },
        {
            name: 'Dark Error',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(darkError),
            dark: true,
        },

        {
            name: 'Dark Error',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(darkError),
            dark: true,
        },
    ],
};
