import { base, sizes, dark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Text - Codeblock',
    slug: 'text-codeblock',
    description: 'A block of code text.',
    'last-updated': '9/21/21',
    image: '/component_icons/text-codeblock.svg',
    imageColor: '/component_icons/text-codeblock_ro.svg',
    variations: [
        {
            name: 'Base',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-codeblock</code> on a code element.',
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-codeblock--xs</code>, <code class="pier-body-text__inline-code">pier-codeblock--sm</code>, or <code class="pier-body-text__inline-code">pier-codeblock--md</code> to change the size of the body text.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-codeblock--dark</code> to change the style of the body text for dark UI themes.',
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { Codeblock } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Codeblock>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The text to be displayed inside of the Codeblock.',
                },
                {
                    name: 'color',
                    type: `string; one of: "default"`,
                    isRequired: false,
                    default: 'default',
                    description: 'Change the Codeblock style.',
                },
                {
                    name: 'size',
                    type: `string; one of: "xs", "sm", "md"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the Codeblock.',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Codeblock to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Codeblock.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Codeblock.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
