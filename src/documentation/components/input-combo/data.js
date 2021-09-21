import { inputComboGroup, inputSelectComboGroup } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Input - Combo',
    slug: 'input - combo',
    description: 'Combo inputs are used for commbining input elements with button elements',
    'last-updated': '9/20/21',
    image: '/component_icons/input-combo.svg',
    imageColor: '/component_icons/input-combo_ro.svg',
    variations: [
        {
            name: 'Input Combo Group',
            description: 'Use the class <code class="pier-body-text__inline-code">pier-input-combo</code> to create a default input combo group',
            markup: inputComboGroup,
            dark: false,
        },
        {
            name: 'Input Select Combo Group',
            description: 'Use the class <code class="pier-body-text__inline-code">pier-input-combo</code> to combine multiple select inputs and buttons.',
            markup: inputSelectComboGroup,
            dark: false,
        },
    ],
    'react-import': `import { InputCombo } from "pier-design-system"`,
    'react-components': [
        {
            name: '<InputCombo>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the input combo.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the input combo',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the input combo.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
