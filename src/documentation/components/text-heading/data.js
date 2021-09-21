import { base, sizes, error, dark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Text - Heading',
    slug: 'text-heading',
    description: 'Heading text in various sizes.',
    'last-updated': '9/21/21',
    image: '/component_icons/text-heading.svg',
    imageColor: '/component_icons/text-heading_ro.svg',
    variations: [
        {
            name: 'Base',
            description: `Use the base class <code class="pier-body-text__inline-code">pier-heading</code> on a heading element.`,
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-heading--xs</code>, <code class="pier-body-text__inline-code">pier-heading--sm</code>, <code class="pier-body-text__inline-code">pier-heading--md</code>, or <code class="pier-body-text__inline-code">pier-heading--lg</code> to change the size of the heading text.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Error',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-heading--error</code> to change the style of the heading to red.',
            markup: error,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-heading--dark</code> to change the style of the heading for dark UI themes.',
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { Heading } from "pier-design-system"`,
    'react-components': [
        {
            name: '<BodyText>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The text to be displayed inside of the Heading.',
                },
                {
                    name: 'color',
                    type: `string; one of: "default"`,
                    isRequired: false,
                    default: 'default',
                    description: 'Change the Heading style.',
                },
                {
                    name: 'size',
                    type: `string; one of: "xs", "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the Heading.',
                },
                {
                    name: 'error',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: 'Change the Heading style to red.',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Heading to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Heading.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Heading.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
