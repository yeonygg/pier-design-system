import ReactDOMServer from 'react-dom/server';
import base from './base';
import sizes from './sizes';
import errors from './errors';
import group from './group';

export default {
    title: 'Input - Text',
    slug: 'input-text',
    description: 'This is a description for input-text.',
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
            name: 'Errors',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(errors),
            dark: false,
        },
        {
            name: 'Group',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(group),
            dark: false,
        },
    ],
};
