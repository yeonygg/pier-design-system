import ReactDOMServer from 'react-dom/server';
import styles from './styles';
import sizes from './sizes';
import dark from './dark';

export default {
    title: 'Horizontal Rule',
    slug: 'horizontal rule',
    description: 'This is a description for horizontal rule.',
    'last-updated': '3/25/21',
    variations: [
        {
            name: 'Styles',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(styles),
            dark: false,
        },
        {
            name: 'Sizes',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(sizes),
            dark: false,
        },
        {
            name: 'Dark',
            description: 'This is the dark modifier.',
            markup: ReactDOMServer.renderToStaticMarkup(dark),
            dark: true,
        },
    ],
};
