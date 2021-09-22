import { base, pill, sizes, disabled, dark, group, block } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Button - Hero',
    slug: 'button - hero',
    description: 'Buttons - hero is the primary button defined by the primaryBoulevard gradient',
    'last-updated': '9/20/21',
    image: '/component_icons/button-hero.svg',
    imageColor: '/component_icons/button-hero_ro.svg',
    variations: [
        {
            name: 'Base',
            description:
                'Use the base class <code class="pier-body-text__inline-code">pier-button-hero</code> and nest inside <code class="pier-body-text__inline-code">pier-button-hero__content</code> to create a default hero button',
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-button-hero--xs</code>, <code class="pier-body-text__inline-code">pier-button-hero--sm</code>, <code class="pier-body-text__inline-code">pier-button-hero--md</code>, or <code class="pier-body-text__inline-code">pier-button-hero--lg</code> to change the size of the button-hero.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Disabled',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-hero--disabled</code> to change the state of the hero button to disabled.',
            markup: disabled,
            dark: false,
        },
        {
            name: 'Pill',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-hero--pill</code> to change the state of the hero button to pill.',
            markup: pill,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-hero--dark</code> to change the style of the hero button for dark UI themes.',
            markup: dark,
            dark: true,
        },
        {
            name: 'Group',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-button-hero--cap-left</code> will cap the left border radius to 0 <code class="pier-body-text__inline-code">pier-button-hero--cap-right</code> will cap the right border radius to 0, <code class="pier-body-text__inline-code">pier-button-hero--cap</code> will cap both sides to a border radius of 0',
            markup: group,
            dark: false,
        },
        {
            name: 'Block',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-button-hero--block</code> to change the state of the hero button to block.',
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
                    name: 'block',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes a block button',
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
