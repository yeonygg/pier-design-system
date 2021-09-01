import ReactDOMServer from 'react-dom/server';
import base from './base';
import sizes from './sizes';
import error from './error';

export default {
    title: 'Input - Group',
    slug: 'input-group',
    description: 'This is a description for input-group.',
    'last-updated': '4/6/21',
    image: '/component_icons/input-group.svg',
    imageColor: '/component_icons/input-group_ro.svg',
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
            name: 'Error',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(error),
            dark: false,
        },
    ],
};
