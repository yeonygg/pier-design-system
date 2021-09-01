import ReactDOMServer from 'react-dom/server';
import inputComboGroup from './input-combo-group';
import inputSelectComboGroup from './input-select-combo-group';


export default {
    title: 'Input - Combo',
    slug: 'input-combo',
    description: 'This is a description for input-combo.',
    'last-updated': '4/6/21',
    image: '/component_icons/input-combo.svg',
    imageColor: '/component_icons/input-combo_ro.svg',
    variations: [
        {
            name: 'Input Combo Group',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(inputComboGroup),
            dark: false,
        },
        {
            name: 'Input Select Combo Group',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(inputSelectComboGroup),
            dark: false,
        },
    ],
};
