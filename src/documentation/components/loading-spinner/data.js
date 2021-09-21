import { base, sizes, dark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Loading Spinner',
    slug: 'loading-spinner',
    description: 'Use a Loading Spinner to indicate that a piece of UI is loading on the page.',
    'last-updated': '9/21/21',
    image: '/component_icons/loading-spinner.svg',
    imageColor: '/component_icons/loading-spinner_ro.svg',
    variations: [
        {
            name: 'Base',
            description: `Use the base class <code class="pier-body-text__inline-code">pier-loading-spinner</code> on the SVG code below for the default or GumGum branded Loading Spinnger. `,
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description: `Use the modifier classes <code class="pier-body-text__inline-code">pier-loading-spinner--sm</code>, <code class="pier-body-text__inline-code">pier-loading-spinner--md</code>, or <code class="pier-body-text__inline-code">pier-loading-spinner--lg</code> to change the size of the Loading Spinner.`,
            markup: sizes,
            dark: false,
        },
        {
            name: 'Dark',
            description: `Use the modifier class <code class="pier-body-text__inline-code">pier-loading-spinner--dark</code> to change the style of the LoadingSpinner for dark UI themes.`,
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { LoadingSpinner } from "pier-design-system"`,
    'react-components': [
        {
            name: '<LoadingSpinner>',
            props: [
                {
                    name: 'theme',
                    type: `string; one of: "default", "gumgum"`,
                    isRequired: false,
                    default: 'default',
                    description: 'Set the theme of the Loading Spinner.',
                },
                {
                    name: 'size',
                    type: `string; one of: "xs", "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the Loading Spinner.',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Loading Spinner to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Loading Spinner.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Loading Spinner.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
