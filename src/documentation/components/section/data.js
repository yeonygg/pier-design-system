import { structure, padding } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Section',
    slug: 'section',
    description: 'The Section component is used to group content on the webpage with padding.',
    'last-updated': '9/17/21',
    image: '/component_icons/section.svg',
    imageColor: '/component_icons/section_ro.svg',
    variations: [
        {
            name: 'Structure',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-section</code> to wrap content grouped on the webpage.',
            markup: structure,
            dark: false,
        },
        {
            name: 'Padding ',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-section--xs</code>, <code class="pier-body-text__inline-code">pier-section--sm</code>, <code class="pier-body-text__inline-code">pier-section--md</code>, <code class="pier-body-text__inline-code">pier-section--lg</code>, <code class="pier-body-text__inline-code">pier-section--xl</code> to adjust the padding of the Section component.',
            markup: padding,
            dark: false,
        },
    ],
    'react-import': `import { Section } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Section>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the Section component.',
                },
                {
                    name: 'padding',
                    type: `string; one of: "xs", "sm", "md", "lg", "xl"`,
                    isRequired: false,
                    default: 'md',
                    description: 'The size of the padding in the Section component.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Section component.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Section component.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
