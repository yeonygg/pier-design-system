import { base, color, sizes, dark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Well',
    slug: 'well',
    description: 'A Well is a styled block container for related content of lower importance.',
    'last-updated': '9/20/21',
    image: '/component_icons/well.svg',
    imageColor: '/component_icons/well_ro.svg',
    variations: [
        {
            name: 'Base',
            description: `Use the base class <code class="pier-body-text__inline-code">pier-well</code> to wrap the content to be displayed in the well. Typical use should wrap <code class="pier-body-text__inline-code">pier-section</code> elements for it's padding.`,
            markup: base,
            dark: false,
        },
        {
            name: 'Color',
            description: `Use the modifier classes <code class="pier-body-text__inline-code">pier-well--primary</code>, <code class="pier-body-text__inline-code">pier-well--error</code>, <code class="pier-body-text__inline-code">pier-well--green</code>, or <code class="pier-body-text__inline-code">pier-well--blue</code> to change the Well theme.`,
            markup: color,
            dark: false,
        },
        {
            name: 'Sizes',
            description: `Use the modifier classes <code class="pier-body-text__inline-code">pier-well--sm</code>, <code class="pier-body-text__inline-code">pier-well--md</code>, or <code class="pier-body-text__inline-code">pier-well--lg</code> to change the Well theme.`,
            markup: sizes,
            dark: false,
        },
        {
            name: 'Dark',
            description: `Use the modifier class <code class="pier-body-text__inline-code">pier-well--dark</code> to change the style of the Well for dark UI themes.`,
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { Well } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Well>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the Well.',
                },
                {
                    name: 'size',
                    type: `string; one of: "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'lg',
                    description: 'Set the size of the Well.',
                },
                {
                    name: 'theme',
                    type: `string; one of: "default", "primary", "error", "green", "blue"`,
                    isRequired: false,
                    default: 'default',
                    description: 'Set the theme of the Well.',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Well to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Well wrapper.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Well wrapper.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
