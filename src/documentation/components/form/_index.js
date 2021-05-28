import ReactDOMServer from 'react-dom/server';
import inputForm from './input-form';

export default {
    title: 'Form',
    slug: 'form',
    description: 'This is a description for input-form.',
    'last-updated': '4/6/21',
    variations: [
        {
            name: 'Input Form',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(inputForm),
            dark: false,
        },
    ],
};