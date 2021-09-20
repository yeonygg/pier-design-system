import { base, pill, sizes, disabled, dark, group, block, error, secondary } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Button - Standard',
    slug: 'button - standard',
    description: 'Buttons are used for directing user to another action',
    'last-updated': '9/20/21',
    image: '/component_icons/button-standard.svg',
    imageColor: '/component_icons/button-standard_ro.svg',
    variations: [
        {
            name: 'Base',
            description:
                'Use the base class <code class="pier-body-text__inline-code">pier-button-standard</code> and nest inside <code class="pier-body-text__inline-code">pier-button-standard__content</code> to create a default standard button',
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-button-standard--xs</code>, <code class="pier-body-text__inline-code">pier-button-standard--sm</code>, <code class="pier-body-text__inline-code">pier-button-standard--md</code>, or <code class="pier-body-text__inline-code">pier-button-standard--lg</code> to change the size of the button-standard.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Disabled',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-standard--disabled</code> to change the state of the standard button to disabled.',
            markup: disabled,
            dark: false,
        },
        {
            name: 'Pill',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-standard--pill</code> to change the state of the standard button to pill.',
            markup: pill,
            dark: false,
        },
        {
            name: 'Secondary',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-standard--secondary</code> to change the state of the standard button to secondary.',
            markup: secondary,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-standard--dark</code> to change the style of the standard button for dark UI themes.',
            markup: dark,
            dark: true,
        },
        {
            name: 'Error',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-standard--error</code> to change the state of the standard button to error.',
            markup: error,
            dark: false,
        },
        {
            name: 'Group',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-button-standard--cap-left</code> to cap the left border radius to 0, <code class="pier-body-text__inline-code">pier-button-standard--cap-right</code>to cap the right border radius to 0, <code class="pier-body-text__inline-code">pier-button-standard--cap</code>to cap both sides to a border radius of 0',
            markup: group,
            dark: false,
        },
        {
            name: 'Block',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-standard--block</code> to change the state of the standard button to block.',
            markup: block,
            dark: false,
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
                    default: '',
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
                    default: '',
                    description: 'Makes the button pill',
                },
                {
                    name: 'error',
                    type: 'bool',
                    isRequired: false,
                    default: '',
                    description: 'Makes the button error',
                },
                {
                    name: 'block',
                    type: 'bool',
                    isRequired: false,
                    default: '',
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
