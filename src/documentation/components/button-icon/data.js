import { base, pill, sizes, disabled, dark, secondary } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Button - Icon',
    slug: 'button - icon',
    description: 'Button - Icon is a button that contains an icon and no accompanying text.',
    'last-updated': '9/20/21',
    image: '/component_icons/button-icon.svg',
    imageColor: '/component_icons/button-icon_ro.svg',
    variations: [
        {
            name: 'Base',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-button-icon</code> to create a default icon button',
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-button-icon--xs</code>, <code class="pier-body-text__inline-code">pier-button-icon--sm</code>, <code class="pier-body-text__inline-code">pier-button-icon--md</code>, or <code class="pier-body-text__inline-code">pier-button-icon--lg</code> to change the size of the button-icon.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Disabled',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-icon--disabled</code> to change the state of the icon button to disabled.',
            markup: disabled,
            dark: false,
        },
        {
            name: 'Pill',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-icon--pill</code> to change the state of the icon button to pill.',
            markup: pill,
            dark: false,
        },
        {
            name: 'Hero',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-icon--secondary</code> to change the state of the icon button to secondary.',
            markup: secondary,
            dark: false,
        },
        {
            name: 'Secondary',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-icon--secondary</code> to change the state of the icon button to secondary.',
            markup: secondary,
            dark: false,
        },
        {
            name: 'Danger',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-icon--secondary</code> to change the state of the icon button to secondary.',
            markup: secondary,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-icon--dark</code> to change the style of the icon button for dark UI themes.',
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { Button } from "pier-design-system"`,
    'react-components': [
        {
            name: '<ButtonIcon>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the button.',
                },
                {
                    name: 'size',
                    type: `string; one of: "xs", "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the button.',
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
                    name: 'icon',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: `Use a font awesome class to display an icon inside of the button. Ex: "fas fa-atom"`,
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
                    name: 'iconStyle',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the icon.',
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
