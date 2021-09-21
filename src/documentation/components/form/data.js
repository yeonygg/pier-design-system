import { inputForm } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Form',
    slug: 'form',
    description: 'forms are used for directing user to another action',
    'last-updated': '9/20/21',
    image: '/component_icons/form.svg',
    imageColor: '/component_icons/form_ro.svg',
    variations: [
        {
            name: 'Input Form',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-form</code> to create a default form',
            markup: inputForm,
            dark: false,
        },
    ],
    'react-import': `import { Form } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Form>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the form.',
                },
                {
                    name: 'name',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'The name of the form',
                },
                {
                    name: 'action',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: '',
                },
                {
                    name: 'method',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: '',
                },
                {
                    name: 'autocomplete',
                    type: 'bool',
                    isRequired: false,
                    default: 'true',
                    description: 'Autocompletes an element in the form',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the form',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the form.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
