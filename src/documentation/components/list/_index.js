import ReactDOMServer from 'react-dom/server';
import unorderedList from 'src/documentation/components/list/unorderedList';
import orderedList from 'src/documentation/components/list/orderedList';
import sizes from 'src/documentation/components/list/sizes';
import dark from 'src/documentation/components/list/dark';

export default {
    title: 'List',
    slug: 'list',
    description: 'This is a description for list.',
    'last-updated': '3/24/21',
    image: '/component_icons/list.svg',
    imageColor: '/component_icons/list_ro.svg',
    variations: [
        {
            name: 'Unordered List',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(unorderedList),
            dark: false,
        },
        {
            name: 'Ordered List',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(orderedList),
            dark: false,
        },
        {
            name: 'Sizes',
            description: 'These are the size modifiers.',
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
