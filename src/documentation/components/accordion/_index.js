import ReactDOMServer from 'react-dom/server';
import base from './base';

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
    ],
};
