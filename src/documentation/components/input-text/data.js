import { base, pill, sizes, disabled, dark, errorDark, capright, capleft, error } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Input - Text',
    slug: 'input - text',
    description: 'Input texts are used for choosing an option from a dropdown',
    'last-updated': '9/21/21',
    image: '/component_icons/input-text.svg',
    imageColor: '/component_icons/input-text_ro.svg',
    variations: [
        {
            name: 'Base',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-input-text</code> to create a default input text',
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-text--sm</code>, <code class="pier-body-text__inline-code">pier-input-text--md</code>, or <code class="pier-body-text__inline-code">pier-input-text--lg</code> to change the size of the input-text.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Error',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-text--error</code> to change the state of the input text to error.',
            markup: error,
            dark: false,
        },
        {
            name: 'Pill',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-text--pill</code> to change the state of the input text to pill.',
            markup: pill,
            dark: false,
        },
        {
            name: 'Disabled',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-text--disabled</code> to change the state of the input text to disabled.',
            markup: disabled,
            dark: false,
        },
        {
            name: 'Cap-Left',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-text--cap-left</code> to cap the left border radius to 0 and remove left border.',
            markup: capleft,
            dark: false,
        },
        {
            name: 'Cap-Right',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-text--cap-right</code> to cap the right border radius to 0 and remove right border.',
            markup: capright,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-text--dark</code> to change the style of the input text for dark UI themes.',
            markup: dark,
            dark: true,
        },
        {
            name: 'Error Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-text--dark pier-input-text--error</code> to change the style of the input text to error for dark UI themes.',
            markup: errorDark,
            dark: true,
        },
    ],
    'react-import': `import { InputText } from "pier-design-system"`,
    'react-components': [
        {
            name: '<InputText>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the input text.',
                },
                {
                    name: 'name',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'The name of the input text.',
                },
                {
                    name: 'type',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'The type of the input text.',
                },
                {
                    name: 'placeholder',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'The placeholder content of the input text.',
                },
                {
                    name: 'value',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: '',
                },
                {
                    name: 'onChange',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Fires the moment when the value of the input text is changed',
                },
                {
                    name: 'onMouseEnter',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input text hover in',
                },
                {
                    name: 'onMouseLeave',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input text hover out',
                },
                {
                    name: 'onBlur',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input text when focus has left the input text',
                },
                {
                    name: 'onFocus',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input text when on focus',
                },
                {
                    name: 'size',
                    type: `string; one of: "xs", "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the input text.',
                },
                {
                    name: 'disabled',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input text to it's disabled state.",
                },
                {
                    name: 'cap',
                    type: `string; one of: "cap", "none", "right", "left"`,
                    isRequired: false,
                    default: 'none',
                    description: 'Sets the cap of the input text.',
                },
                {
                    name: 'pill',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes the input text pill',
                },
                {
                    name: 'error',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes the input text error',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input text to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the input text',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the input text.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
