import { base, partial, sizes, disabled, dark, error, partialDark, errorDark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Input - Checkbox',
    slug: 'input - checkbox',
    description: 'Checkbox inputs are used for confirming an option',
    'last-updated': '9/20/21',
    image: '/component_icons/input-checkbox.svg',
    imageColor: '/component_icons/input-checkbox_ro.svg',
    variations: [
        {
            name: 'Base',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-input-checkbox</code> to create a default input checkbox',
            markup: base,
            dark: false,
        },
        {
            name: 'Partial',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-checkbox--partial</code> to change the state of the input checkbox to partial.',
            markup: partial,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-checkbox--xs</code>, <code class="pier-body-text__inline-code">pier-input-checkbox--sm</code>, <code class="pier-body-text__inline-code">pier-input-checkbox--md</code>, or <code class="pier-body-text__inline-code">pier-input-checkbox--lg</code> to change the size of the input-checkbox.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Error',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-checkbox--error</code> to change the state of the input checkbox to error.',
            markup: error,
            dark: false,
        },
        {
            name: 'Disabled',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-checkbox--disabled</code> to change the state of the input checkbox to disabled.',
            markup: disabled,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-checkbox--dark</code> to change the style of the input checkbox for dark UI themes.',
            markup: dark,
            dark: true,
        },
        {
            name: 'Partial Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-checkbox--dark</code> to change the style of the input checkbox for dark UI themes.',
            markup: partialDark,
            dark: true,
        },
        {
            name: 'Error Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-checkbox--dark</code> to change the style of the input checkbox for dark UI themes.',
            markup: errorDark,
            dark: true,
        },
    ],
    'react-import': `import { InputCheckbox } from "pier-design-system"`,
    'react-components': [
        {
            name: '<InputCheckbox>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the input checkbox.',
                },
                {
                    name: 'name',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'The name of the checkbox',
                },
                {
                    name: 'checked',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Selects an input checked',
                },
                {
                    name: 'indeterminate',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Selects an input as partial',
                },
                {
                    name: 'size',
                    type: `string; one of: "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the input checkbox.',
                },
                {
                    name: 'disabled',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input checkbox to it's disabled state.",
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input checkbox to it's dark theme.",
                },
                {
                    name: 'onChange',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Fires the moment when the value of the input checkbox is changed',
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
                    description: 'Makes the input checkbox error',
                },
                {
                    name: 'onClick',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input checkbox click',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the input checkbox',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the input checkbox.',
                },
                {
                    name: 'onMouseEnter',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input checkbox hover in',
                },
                {
                    name: 'onMouseLeave',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input checkbox hover out',
                },
                {
                    name: 'onBlur',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input checkbox when focus has left the input checkbox',
                },
                {
                    name: 'onFocus',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input checkbox when on focus',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
