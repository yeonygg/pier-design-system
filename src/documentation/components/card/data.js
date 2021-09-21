import { base, color, link, dark, sizes } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Card',
    slug: 'card',
    description: 'A Card is a styled block container for related content of high importance.',
    'last-updated': '9/20/21',
    image: '/component_icons/card.svg',
    imageColor: '/component_icons/card_ro.svg',
    variations: [
        {
            name: 'Base',
            description: `Use the base class <code class="pier-body-text__inline-code">pier-card</code> to wrap the content to be displayed in the card. Typical use should wrap <code class="pier-body-text__inline-code">pier-section</code> elements for it's padding.`,
            markup: base,
            dark: false,
        },
        {
            name: 'Link',
            description: `Use the modifier class <code class="pier-body-text__inline-code">pier-card--link</code> to make the Card interactive on hover for links.`,
            markup: link,
            dark: false,
        },
        {
            name: 'Size',
            description: `Use the modifier classes <code class="pier-body-text__inline-code">pier-card--sm</code>, <code class="pier-body-text__inline-code">pier-card--md</code>, or <code class="pier-body-text__inline-code">pier-card--lg</code> to change the Card size.`,
            markup: sizes,
            dark: false,
        },
        {
            name: 'Color',
            description: `Use the modifier classes <code class="pier-body-text__inline-code">pier-card--primary</code>, <code class="pier-body-text__inline-code">pier-card--error</code>, <code class="pier-body-text__inline-code">pier-card--green</code>, or <code class="pier-body-text__inline-code">pier-card--blue</code> to change the Card theme.`,
            markup: color,
            dark: false,
        },
        {
            name: 'Dark',
            description: `Use the modifier class <code class="pier-body-text__inline-code">pier-card--dark</code> to change the style of the Card for dark UI themes.`,
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { Card } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Card>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the Card.',
                },
                {
                    name: 'size',
                    type: `string; one of: "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'lg',
                    description: 'Set the size of the Card.',
                },
                {
                    name: 'theme',
                    type: `string; one of: "default", "primary", "error", "green", "blue"`,
                    isRequired: false,
                    default: 'default',
                    description: 'Set the theme of the Card.',
                },
                {
                    name: 'isLink',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: 'Set the Card to be interactive on hover.',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Card to it's dark theme.",
                },
                {
                    name: 'onClick',
                    type: 'function',
                    isRequired: false,
                    default: '',
                    description: 'Execute the defined function on Card click.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Card wrapper.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Card wrapper.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
