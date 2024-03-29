import { base, sizes, error, dark, validation } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Input - Group',
    slug: 'input - group',
    description: 'Input groups are used for combining input elements with labels and validations',
    'last-updated': '9/20/21',
    image: '/component_icons/input-group.svg',
    imageColor: '/component_icons/input-group_ro.svg',
    variations: [
        {
            name: 'Base',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-input-group</code> to create a default input group',
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-group--sm</code>, <code class="pier-body-text__inline-code">pier-input-group--md</code>, or <code class="pier-body-text__inline-code">pier-input-group--lg</code> to change the size of the input-group.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Error',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-group--error</code> to change the state of the input group to error.',
            markup: error,
            dark: false,
        },
        {
            name: 'Validation',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-group--validation</code> to change the state of the input group to with validation.',
            markup: validation,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-group--dark</code> to change the state of the input group to dark.',
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { InputGroup } from "pier-design-system"`,
    'react-components': [
        {
            name: '<InputGroup>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the input group.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the input group',
                },
                {
                    name: 'htmlFor',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'htmlFor property reflects the value of the content of the input group.',
                },
                {
                    name: 'label',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add a label to the input group.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the input group.',
                },
                {
                    name: 'error',
                    type: 'string',
                    isRequired: false,
                    default: 'false',
                    description: 'Make this input group error',
                },
                {
                    name: 'validation',
                    type: 'string',
                    isRequired: false,
                    default: 'false',
                    description: 'Add validation text to the input group—i.e. (*required)',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input group to it's dark theme.",
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
