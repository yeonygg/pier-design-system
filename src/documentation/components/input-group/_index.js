import ReactDOMServer from 'react-dom/server';
import inputTextGroup from './input-text-group';
import inputSelectGroup from './input-select-group';
import inputTextareaGroup from './input-textarea-group';
import inputRadioGroup from './input-radio-group';
import inputComboGroup from './input-combo-group';
import inputSelectComboGroup from './input-select-combo-group';

export default {
    title: 'Input - Group',
    slug: 'input-group',
    description: 'This is a description for input-group.',
    'last-updated': '4/6/21',
    variations: [
        {
            name: 'Input Text',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(inputTextGroup),
            dark: false,
        },
        {
            name: 'Input Select',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(inputSelectGroup),
            dark: false,
        },
        {
            name: 'Input Textarea',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(inputTextareaGroup),
            dark: false,
        },
        {
            name: 'Input Radio Group',
            description: '',
            markup: ReactDOMServer.renderToStaticMarkup(inputRadioGroup),
            dark: false,
        },
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
