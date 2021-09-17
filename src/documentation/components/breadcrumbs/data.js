import { base, ellipsis, dark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Breadcrumbs',
    slug: 'breadcrumbs',
    description: 'Breadcrumbs are a list of related links that help with site navigation.',
    'last-updated': '9/16/21',
    image: '/component_icons/breadcrumbs.svg',
    imageColor: '/component_icons/breadcrumbs_ro.svg',
    variations: [
        {
            name: 'Base',
            description:
                'Use the base class <code class="pier-body-text__inline-code">pier-breadcrumbs</code> on a wrapper element that wraps many elements with the element class <code class="pier-body-text__inline-code">pier-breadcrumbs__crumb</code> which should wrap link elements with the class <code class="pier-body-text__inline-code">pier-link</code>.',
            markup: base,
            dark: false,
        },
        {
            name: 'With Ellipsis',
            description:
                'Use the element class <code class="pier-body-text__inline-code">pier-breadcrumbs__ellipsis</code> to indicate a condensed list of crumbs.',
            markup: ellipsis,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-breadcrumbs--dark</code> to change the style of the Breadcrumbs for dark UI themes.',
            markup: dark,
            dark: true,
        },
    ],
    'react-import': `import { Breadcrumbs, BreadcrumbsLink } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Breadcrumbs>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'Breadcrumbs should only wrap <BreadcrumbsLink> components to display breadcrumbs links.',
                },
                {
                    name: 'maxCrumbs',
                    type: 'number',
                    isRequired: false,
                    default: '',
                    description:
                        'The max amount of breadcrumbs links to be displayed inside of Breadcrumbs. Must be a number greater than 2 and less than the number of children.',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the Breadcrumbs to it's dark theme.",
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Breadcrumbs wrapper.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Breadcrumbs wrapper.',
                },
            ],
        },
        {
            name: '<BreadcrumbsLink>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The text for the breadcrumbs link.',
                },
                {
                    name: 'disabled',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: `Set the breadcrumbs link to it's disabled state.`,
                },
                {
                    name: 'onClick',
                    type: 'function',
                    isRequired: false,
                    default: '',
                    description: 'Execute the defined function on breadcrumbs link click.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the breadcrumbs link.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the breadcrumbs link.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
