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
    'react-import': `import { Button } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Button>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the button.',
                },
                {
                    name: 'theme',
                    type: 'string',
                    isRequired: true,
                    default: 'hero',
                    description: 'The theme(color) of the button.',
                },
                {
                    name: 'icon',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: `Use a font awesome class to display an icon inside of the button. Ex: "fas fa-atom"`,
                },
                {
                    name: 'size',
                    type: `string; one of: "xs", "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the button.',
                },
                {
                    name: 'disabled',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the button to it's disabled state.",
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the button to it's dark theme.",
                },
                {
                    name: 'cap',
                    type: `string; one of: "cap", "none", "right", "left"`,
                    isRequired: false,
                    default: 'none',
                    description: 'Sets the cap of the button.',
                },
                {
                    name: 'type',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add type onto the button.',
                },
                {
                    name: 'value',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: '',
                },
                {
                    name: 'pill',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes the button pill',
                },
                {
                    name: 'error',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes the button error',
                },
                {
                    name: 'secondary',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes a secondary button',
                },
                {
                    name: 'block',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes a block button',
                },
                {
                    name: 'onClick',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on button click',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the button',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the button.',
                },
                {
                    name: 'onMouseEnter',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on button hover in',
                },
                {
                    name: 'onMouseLeave',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on button hover out',
                },
                {
                    name: 'onBlur',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on button when focus has left the button',
                },
                {
                    name: 'onFocus',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on button when on focus',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
