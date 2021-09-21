import { styles, sizes, dark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Horizontal Rule',
    slug: 'horizontal-rule',
    description: 'Use a Horizontal Rule to draw a line to divide content.',
    'last-updated': '9/20/21',
    image: '/component_icons/horizontal-rule.svg',
    imageColor: '/component_icons/horizontal-rule_ro.svg',
    variations: [
        {
            name: 'Styles',
            description: `Use the base class <code class="pier-body-text__inline-code">pier-hr</code> to create a Horizontal Rule. Use the modifier classes <code class="pier-body-text__inline-code">pier-hr--dark</code> or <code class="pier-body-text__inline-code">pier-hr--hero</code> to change the style.`,
            markup: styles,
            dark: false,
        },
        {
            name: 'Sizes',
            description: `Use the modifier classes <code class="pier-body-text__inline-code">pier-hr--sm</code>, <code class="pier-body-text__inline-code">pier-hr--md</code>, or <code class="pier-body-text__inline-code">pier-hr--lg</code> to change the size of the Horizontal Rule.`,
            markup: sizes,
            dark: false,
        },
        {
            name: 'Dark',
            description: `Use the modifier classes <code class="pier-body-text__inline-code">pier-hr--white</code> to change the style of the Horizontal Rule to white.`,
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { HR } from "pier-design-system"`,
    'react-components': [
        {
            name: '<HR>',
            props: [
                {
                    name: 'size',
                    type: `string; one of: 'sm', 'md', 'lg'`,
                    isRequired: false,
                    default: 'sm',
                    description: 'Set the size of the Horizontal Rule.',
                },
                {
                    name: 'theme',
                    type: `string; one of: 'hero', 'white', 'lighter', 'light-gray', 'light', 'dark', 'darker', 'gray'`,
                    isRequired: false,
                    default: 'light',
                    description: 'Set the color of the Horizontal Rule.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Horizontal Rule.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Horizontal Rule.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
