import { base, sizes, disabled, dark, error, errorDark } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Input - Toggle',
    slug: 'input - toggle',
    description: 'Toggle inputs are used for selecting a boolean value of on or off.',
    'last-updated': '9/20/21',
    image: '/component_icons/input-toggle.svg',
    imageColor: '/component_icons/input-toggle_ro.svg',
    variations: [
        {
            name: 'Base',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-input-toggle</code> to create a default input toggle',
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-toggle--sm</code>, <code class="pier-body-text__inline-code">pier-input-toggle--md</code>, or <code class="pier-body-text__inline-code">pier-input-toggle--lg</code> to change the size of the input-toggle.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Error',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-toggle--error</code> to change the state of the input toggle to error.',
            markup: error,
            dark: false,
        },
        {
            name: 'Disabled',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-toggle--disabled</code> to change the state of the input toggle to disabled.',
            markup: disabled,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-toggle--dark</code> to change the style of the input toggle for dark UI themes.',
            markup: dark,
            dark: true,
        },
        {
            name: 'Error Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-toggle--dark</code> to change the style of the input toggle for dark UI themes.',
            markup: errorDark,
            dark: true,
        },
    ],
    'react-import': `import { InputToggle } from "pier-design-system"`,
    'react-components': [
        {
            name: '<InputToggle>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the input toggle.',
                },
                {
                    name: 'name',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'The name of the toggle',
                },
                {
                    name: 'indeterminate',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Selects an input as partial',
                },
                {
                    name: 'checked',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Selects an input checked',
                },
                {
                    name: 'size',
                    type: `string; one of: "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the input toggle.',
                },
                {
                    name: 'disabled',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input toggle to it's disabled state.",
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input toggle to it's dark theme.",
                },
                {
                    name: 'onChange',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Fires the moment when the value of the input toggle is changed',
                },
                {
                    name: 'value',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: '',
                },
                {
                    name: 'error',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes the input toggle error',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the input toggle',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the input toggle.',
                },
                {
                    name: 'onMouseEnter',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input toggle hover in',
                },
                {
                    name: 'onMouseLeave',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input toggle hover out',
                },
                {
                    name: 'onBlur',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input toggle when focus has left the input toggle',
                },
                {
                    name: 'onFocus',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input toggle when on focus',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
