import { base, position, sizes, dark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Bubble Menu',
    slug: 'bubble-menu',
    description: `Bubble Menus are nested menus that display a list of choices or links when it's parent element is interacted with.`,
    'last-updated': '9/17/21',
    image: '/component_icons/bubble-menu.svg',
    imageColor: '/component_icons/bubble-menu_ro.svg',
    variations: [
        {
            name: 'Base',
            description: `Use the base class <code class="pier-body-text__inline-code">pier-bubble-menu</code> that wraps many elements with the class <code class="pier-body-text__inline-code">pier-bubble-menu__label</code> or <code class="pier-body-text__inline-code">pier-bubble-menu__item</code>. Use the modifier class <code class="pier-body-text__inline-code">pier-bubble-menu--open</code> to reveal the Bubble Menu.`,
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description: `Use the modifier classes <code class="pier-body-text__inline-code">pier-bubble-menu--sm</code>, <code class="pier-body-text__inline-code">pier-bubble-menu--md</code>, or <code class="pier-body-text__inline-code">pier-bubble-menu--lg</code> to change the size of the Bubble Menu.`,
            markup: sizes,
            dark: false,
        },
        {
            name: 'Position',
            description: `Use the modifier classes <code class="pier-body-text__inline-code">pier-bubble-menu--top-left</code>, <code class="pier-body-text__inline-code">pier-bubble-menu--bottom-left</code>, <code class="pier-body-text__inline-code">pier-bubble-menu--top-right</code>, or <code class="pier-body-text__inline-code">pier-bubble-menu--bottom-right</code> to change the position of the Bubble Menu.`,
            markup: position,
            dark: false,
        },
        {
            name: 'Dark',
            description: `Use the modifier class <code class="pier-body-text__inline-code">pier-bubble-menu--dark</code> to change the style of the Bubble Menu for dark UI themes.`,
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { BubbleMenu, BubbleMenuItem, BubbleMenuLabel } from 'pier-design-system';`,
    'react-components': [
        {
            name: '<BubbleMenu>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the open Bubble Menu.',
                },
                {
                    name: 'open',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: 'Reveals the Bubble Menu.',
                },
                {
                    name: 'size',
                    type: `string; one of: "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the Bubble Menu.',
                },
                {
                    name: 'position',
                    type: `string; one of: "top left", "top right", "bottom left", "bottom right"`,
                    isRequired: false,
                    default: 'bottom left',
                    description: 'Set the position of the Bubble Menu.',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Bubble Menu to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Bubble Menu wrapper.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Bubble Menu wrapper.',
                },
            ],
        },
        {
            name: '<BubbleMenuLabel>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The text to be displayed inside the Bubble Menu label.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Bubble Menu label.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Bubble Menu label.',
                },
            ],
        },
        {
            name: '<BubbleMenuItem>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The text to be displayed inside the Bubble Menu item.',
                },
                {
                    name: 'onClick',
                    type: 'function',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Bubble Menu item.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Execute the defined function on Bubble Menu item click.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Bubble Menu item.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
