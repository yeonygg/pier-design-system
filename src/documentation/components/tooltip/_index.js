import ReactDOMServer from 'react-dom/server';
import base from './base';


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

    ],
};
