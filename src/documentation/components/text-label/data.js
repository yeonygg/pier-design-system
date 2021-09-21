import { base, dark, sizes } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Text - Label',
    slug: 'text-label',
    description: 'Text for labelling inputs or other UI.',
    'last-updated': '7/21/21',
    image: '/component_icons/text-label.svg',
    imageColor: '/component_icons/text-label_ro.svg',
    variations: [
        {
            name: 'Base',
            description: `Use the base class <code class="pier-body-text__inline-code">pier-label</code> on a paragraph element.`,
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-body-text--sm</code>, <code class="pier-body-text__inline-code">pier-body-text--md</code>, or <code class="pier-body-text__inline-code">pier-body-text--lg</code> to change the size of the body text.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-label--dark</code> to change the style of the body text for dark UI themes.',
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { Label } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Label>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The text to be displayed inside of the Label.',
                },
                {
                    name: 'htmlFor',
                    type: `string`,
                    isRequired: false,
                    default: '',
                    description: 'The html for attribute for inputs.',
                },
                {
                    name: 'size',
                    type: `string; one of: "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the Label.',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Label to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Label.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Label.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
