import { base, pill, sizes, disabled, dark, errorDark, capright, capleft, error } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Input - Select',
    slug: 'input - select',
    description: 'Input Selects are used for choosing an option from a dropdown',
    'last-updated': '9/21/21',
    image: '/component_icons/input-select.svg',
    imageColor: '/component_icons/input-select_ro.svg',
    variations: [
        {
            name: 'Base',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-input-select</code> to create a default input select',
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-select--sm</code>, <code class="pier-body-text__inline-code">pier-input-select--md</code>, or <code class="pier-body-text__inline-code">pier-input-select--lg</code> to change the size of the input-select.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Error',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-select--error</code> to change the state of the input select to error.',
            markup: error,
            dark: false,
        },
        {
            name: 'Pill',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-select--pill</code> to change the state of the input select to pill.',
            markup: pill,
            dark: false,
        },
        {
            name: 'Disabled',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-select--disabled</code> to change the state of the input select to disabled.',
            markup: disabled,
            dark: false,
        },
        {
            name: 'Cap-Left',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-select--cap-left</code> to cap the left border radius to 0 and remove left border.',
            markup: capleft,
            dark: false,
        },
        {
            name: 'Cap-Right',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-select--cap-right</code> to cap the right border radius to 0 and remove right border.',
            markup: capright,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-select--dark</code> to change the style of the input select for dark UI themes.',
            markup: dark,
            dark: true,
        },
        {
            name: 'Error Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-select--dark pier-input-select--error</code> to change the style of the input select to error for dark UI themes.',
            markup: errorDark,
            dark: true,
        },
    ],
    'react-import': `import { InputSelect } from "pier-design-system"`,
    'react-components': [
        {
            name: '<InputSelect>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the input select.',
                },
                {
                    name: 'name',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'The name of the input select.',
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
                    description: 'Fires the moment when the value of the input select is changed',
                },
                {
                    name: 'onMouseEnter',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input select hover in',
                },
                {
                    name: 'onMouseLeave',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input select hover out',
                },
                {
                    name: 'onBlur',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input select when focus has left the input select',
                },
                {
                    name: 'onFocus',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input select when on focus',
                },
                {
                    name: 'size',
                    type: `string; one of: "xs", "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the input select.',
                },
                {
                    name: 'disabled',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input select to it's disabled state.",
                },
                {
                    name: 'cap',
                    type: `string; one of: "cap", "none", "right", "left"`,
                    isRequired: false,
                    default: 'none',
                    description: 'Sets the cap of the input select.',
                },
                {
                    name: 'pill',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes the input select pill',
                },
                {
                    name: 'error',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes the input select error',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input select to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the input select',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the input select.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
