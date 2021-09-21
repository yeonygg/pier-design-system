import { base, disabled, dark, sizes } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Text - Link',
    slug: 'text-link',
    description: 'This is a description for link.',
    'last-updated': '9/21/21',
    image: '/component_icons/text-link.svg',
    imageColor: '/component_icons/text-link_ro.svg',
    variations: [
        {
            name: 'Base',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-link</code> on a text element.',
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-link--xs</code>, <code class="pier-body-text__inline-code">pier-link--sm</code>, or <code class="pier-body-text__inline-code">pier-link--md</code> to change the size of the link.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Disabled',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-link--disabled</code> to change the state of the link to disabled.',
            markup: disabled,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-link--dark</code> to change the style of the link for dark UI themes.',
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { Link } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Link>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The text to be displayed inside of the Link.',
                },
                {
                    name: 'size',
                    type: `string; one of: "xs", "sm", "md"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the Link.',
                },
                {
                    name: 'disabled',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: 'Sets the state of the Link to disabled.',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Link to it's dark theme.",
                },
                {
                    name: 'onClick',
                    type: 'function',
                    isRequired: false,
                    default: '',
                    description: 'Execute the defined function on Link click.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Link.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Link.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
