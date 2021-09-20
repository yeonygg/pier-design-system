import { base, sizes, disabled, dark, error, errorDark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Input - Radio',
    slug: 'input - radio',
    description: 'Radio inputs are used for selecting an option out of mutiple options',
    'last-updated': '9/20/21',
    image: '/component_icons/input-radio.svg',
    imageColor: '/component_icons/input-radio_ro.svg',
    variations: [
        {
            name: 'Base',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-input-radio</code> to create a default input radio',
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-radio--xs</code>, <code class="pier-body-text__inline-code">pier-input-radio--sm</code>, <code class="pier-body-text__inline-code">pier-input-radio--md</code>, or <code class="pier-body-text__inline-code">pier-input-radio--lg</code> to change the size of the input-radio.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Error',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-radio--error</code> to change the state of the input radio to error.',
            markup: error,
            dark: false,
        },
        {
            name: 'Disabled',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-radio--disabled</code> to change the state of the input radio to disabled.',
            markup: disabled,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-radio--dark</code> to change the style of the input radio for dark UI themes.',
            markup: dark,
            dark: true,
        },
        {
            name: 'Error Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-radio--dark</code> to change the style of the input radio for dark UI themes.',
            markup: errorDark,
            dark: true,
        },
    ],
    'react-import': `import { InputRadio } from "pier-design-system"`,
    'react-components': [
        {
            name: '<input radio>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the input radio.',
                },
                {
                    name: 'name',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'The name of the radio',
                },
                {
                    name: 'checked',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Selects an input checked',
                },
                {
                    name: 'size',
                    type: `string; one of: "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the input radio.',
                },
                {
                    name: 'disabled',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input radio to it's disabled state.",
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input radio to it's dark theme.",
                },
                {
                    name: 'onChange',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Fires the moment when the value of the input radio is changed',
                },
                {
                    name: 'value',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: '',
                },
                {
                    name: 'error',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes the input radio error',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the input radio',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the input radio.',
                },
                {
                    name: 'onMouseEnter',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input radio hover in',
                },
                {
                    name: 'onMouseLeave',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input radio hover out',
                },
                {
                    name: 'onBlur',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input radio when focus has left the input radio',
                },
                {
                    name: 'onFocus',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input radio when on focus',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
