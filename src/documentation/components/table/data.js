import { base, sizes, striped, dark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Table',
    slug: 'table',
    description: 'Use a Table to display data.',
    'last-updated': '9/21/21',
    image: '/component_icons/table.svg',
    imageColor: '/component_icons/table_ro.svg',
    variations: [
        {
            name: 'Base',
            description: `Use the base class <code class="pier-body-text__inline-code">pier-table</code> to wrap <code class="pier-body-text__inline-code">thead</code> and <code class="pier-body-text__inline-code">tbody</code> elements. Element class <code class="pier-body-text__inline-code">pier-table__row</code> should wrap either element classes <code class="pier-body-text__inline-code">pier-table__header</code> or <code class="pier-body-text__inline-code">pier-table__cell</code> depending if they are inside of the <code class="pier-body-text__inline-code">thead</code> or <code class="pier-body-text__inline-code">tbody</code>.`,
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description: `Use the modifier classes <code class="pier-body-text__inline-code">pier-table--sm</code>, <code class="pier-body-text__inline-code">pier-table--md</code>, or <code class="pier-body-text__inline-code">pier-table--lg</code> to change the size of the Table.`,
            markup: sizes,
            dark: false,
        },
        {
            name: 'Striped',
            description: `Use the modifier class <code class="pier-body-text__inline-code">pier-table--striped</code> to change the style of the Table to striped.`,
            markup: striped,
            dark: false,
        },
        {
            name: 'Dark',
            description: `Use the modifier class <code class="pier-body-text__inline-code">pier-table--dark</code> to change the style of the Table for dark UI themes.`,
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { Table } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Table>',
            props: [
                {
                    name: 'columns',
                    type: 'array of strings',
                    isRequired: true,
                    default: '',
                    description: 'An array of strings of the column properties to be displayed in the Table and Table header.',
                },
                {
                    name: 'data',
                    type: 'array of objects',
                    isRequired: true,
                    default: '',
                    description: 'An array of objects of the data to be displayed in the Table.',
                },
                {
                    name: 'size',
                    type: `string; one of: "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the Table.',
                },
                {
                    name: 'striped',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: 'Set the Table style to striped.',
                },
                {
                    name: 'hideHeader',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: 'Hide the Table header.',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Table to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Table wrapper.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Table wrapper.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
