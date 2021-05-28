import ReactDOMServer from 'react-dom/server';
import base from './base';
import sizes from './sizes';
import styles from './styles';
import disabled from './disabled';
import pill from './pill';
import dark from './dark';
import staticTag from './static';

export default {
    title: 'Tag',
    slug: 'tag',
    description: 'This is a description for tags.',
    'last-updated': '3/30/21',
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
            name: 'Styles',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(styles),
            dark: false,
        },
        {
            name: 'Disabled',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(disabled),
            dark: false,
        },
        {
            name: 'Pill',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(pill),
            dark: false,
        },
        {
            name: 'Dark',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(dark),
            dark: true,
        },
        {
            name: 'Static',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(staticTag),
            dark: false,
        },
    ],
};
