import { base, open, incard, sizes, disabled, dark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Accordion',
    slug: 'accordion',
    description: 'Accordions display a list of high-level options than can expand to reveal more content.',
    'last-updated': '9/14/21',
    image: '/component_icons/accordian.svg',
    imageColor: '/component_icons/accordian_ro.svg',
    variations: [
        {
            name: 'Base',
            description: `Use the base class <code class="pier-body-text__inline-code">pier-accordion</code> that wraps two elements <code class="pier-body-text__inline-code">pier-accordion__title</code> and <code class="pier-body-text__inline-code">pier-accordion__content</code>. <code class="pier-body-text__inline-code">pier-accordion__title</code> should wrap the persistant header Accordion content and <code class="pier-body-text__inline-code">pier-accordion__content</code> should wrap the content that will be revealed on click.`,
            markup: base,
            dark: false,
        },
        {
            name: 'Open',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-accordion--open</code> to reveal the contents of the Accordion.',
            markup: open,
            dark: false,
        },
        {
            name: 'In Card',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-accordion--card</code> if the Accordion is in a Card component without padding.',
            markup: incard,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-accordion--xs</code>, <code class="pier-body-text__inline-code">pier-accordion--sm</code>, <code class="pier-body-text__inline-code">pier-accordion--md</code>, or <code class="pier-body-text__inline-code">pier-accordion--lg</code> to change the size of the Accordion.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Disabled',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-accordion--disabled</code> to change the state of the Accordion to disabled.',
            markup: disabled,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-accordion--dark</code> to change the style of the Accordion for dark UI themes.',
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { Accordion } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Accordion>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the open Accordion.',
                },
                {
                    name: 'title',
                    type: 'string',
                    isRequired: true,
                    default: '',
                    description: 'The title text displayed inside the collapsed and open Accordion.',
                },
                {
                    name: 'startOpen',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "If true, will load the Accordion in it's open state.",
                },
                {
                    name: 'inCard',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: 'Set to true if you would like to use the Accordion inside a Card component with the correct padding.',
                },
                {
                    name: 'icon',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: `Use a font awesome class to display an icon inside of the Accordion title. Ex: "fas fa-atom"`,
                },
                {
                    name: 'size',
                    type: `string; one of: "xs", "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the Accordion.',
                },
                {
                    name: 'disabled',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Accordion to it's disabled state.",
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Accordion to it's dark theme.",
                },
                {
                    name: 'onClick',
                    type: 'function',
                    isRequired: false,
                    default: '',
                    description: 'Execute the defined function on Accordion click.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Accordion wrapper.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Accordion wrapper.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
