import { base, color, dark, error, sizes } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Text - Body',
    slug: 'text-body',
    description: 'Paragraph body text.',
    'last-updated': '9/21/21',
    image: '/component_icons/text-body.svg',
    imageColor: '/component_icons/text-body_ro.svg',
    variations: [
        {
            name: 'Base',
            description: `Use the base class <code class="pier-body-text__inline-code">pier-body-text</code> on a paragraph element.`,
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-body-text--xs</code>, <code class="pier-body-text__inline-code">pier-body-text--sm</code>, or <code class="pier-body-text__inline-code">pier-body-text--md</code> to change the size of the body text.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Color',
            description: 'Use the modifier class <code class="pier-body-text__inline-code">pier-body-text--light</code> to change the style of the body text.',
            markup: color,
            dark: false,
        },
        {
            name: 'Error',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-body-text--error</code> to change the style of the body text to red.',
            markup: error,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-body-text--dark</code> to change the style of the body text for dark UI themes.',
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { BodyText } from "pier-design-system"`,
    'react-components': [
        {
            name: '<BodyText>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The text to be displayed inside of the Body Text.',
                },
                {
                    name: 'color',
                    type: `string; one of: "default", "light"`,
                    isRequired: false,
                    default: 'default',
                    description: 'Change the Body Text style.',
                },
                {
                    name: 'size',
                    type: `string; one of: "xs", "sm", "md"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the Body Text.',
                },
                {
                    name: 'error',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: 'Change the Body Text style to red.',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Body Text to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Body Text.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Body Text.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
