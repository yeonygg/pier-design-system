import ReactDOMServer from 'react-dom/server';
import base from './base';
import sizes from './sizes';
import disabled from './disabled';
import pill from './pill';
import dark from './dark';
import group from './group';
import block from './block';

export default {
    title: 'Button - Hero',
    slug: 'button-hero',
    description: 'This is a description for buttons.',
    'last-updated': '3/30/21',
    image: '/component_icons/button-hero.svg',
    imageColor: '/component_icons/button-hero_ro.svg',
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
            name: 'Group',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(group),
            dark: false,
        },
        {
            name: 'Block',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(block),
            dark: false,
        },
    ],
};
