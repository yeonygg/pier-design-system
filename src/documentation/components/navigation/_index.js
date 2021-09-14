import ReactDOMServer from 'react-dom/server';
import base from './base';

export default {
    title: 'Navigation',
    slug: 'navigation',
    description: 'This is a description for navigation.',
    'last-updated': '3/25/21',
    image: '/component_icons/navigation.svg',
    imageColor: '/component_icons/navigation_ro.svg',
    variations: [
        {
            name: 'Base',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(base),
            dark: false,
        },
    ],
};
