import { unorderedList, orderedList, sizes, dark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'List',
    slug: 'list',
    description: 'Use a List for unordered or ordered lists of text.',
    'last-updated': '9/20/21',
    image: '/component_icons/list.svg',
    imageColor: '/component_icons/list_ro.svg',
    variations: [
        {
            name: 'Unordered List',
            description: `Use the base class <code class="pier-body-text__inline-code">pier-list</code> that wraps elements with the class <code class="pier-body-text__inline-code">pier-list__item</code> that wraps an element with the class <code class="pier-body-text__inline-code">pier-list__content</code> for the List item content.`,
            markup: unorderedList,
            dark: false,
        },
        {
            name: 'Ordered List',
            description: `Use the modifier class <code class="pier-body-text__inline-code">pier-list--ordered</code> to create an ordered List.`,
            markup: orderedList,
            dark: false,
        },
        {
            name: 'Sizes',
            description: `Use the modifier classes <code class="pier-body-text__inline-code">pier-list--sm</code>, <code class="pier-body-text__inline-code">pier-list--md</code>, or <code class="pier-body-text__inline-code">pier-list--lg</code> to change the size of the List.`,
            markup: sizes,
            dark: false,
        },
        {
            name: 'Dark',
            description: `Use the modifier class <code class="pier-body-text__inline-code">pier-list--dark</code> to change the style of the List for dark UI themes.`,
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { List, ListItem } from "pier-design-system"`,
    'react-components': [
        {
            name: '<List>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the List.',
                },
                {
                    name: 'size',
                    type: `string; one of: "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the List.',
                },
                {
                    name: 'ordered',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: `Set the List to it's ordered style.`,
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the List to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the List wrapper.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the List wrapper.',
                },
            ],
        },
        {
            name: '<ListItem>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The text to be displayed inside of List item.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the List item.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the List item.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
