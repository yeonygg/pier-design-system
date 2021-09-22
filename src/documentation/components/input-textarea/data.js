import { base, auto, sizes, disabled, dark, errorDark, horizontal, textDisabled, error } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Input - Textarea',
    slug: 'input - textarea',
    description: 'Input textareas are used for typing information requiring 1 sentence or more into a user text field.',
    'last-updated': '9/21/21',
    image: '/component_icons/input-textarea.svg',
    imageColor: '/component_icons/input-textarea_ro.svg',
    variations: [
        {
            name: 'Base',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-input-textarea</code> to create a default input textarea',
            markup: base,
            dark: false,
        },
        {
            name: 'Sizes',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-textarea--sm</code>, <code class="pier-body-text__inline-code">pier-input-textarea--md</code>, or <code class="pier-body-text__inline-code">pier-input-textarea--lg</code> to change the size of the input-textarea.',
            markup: sizes,
            dark: false,
        },
        {
            name: 'Error',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-textarea--error</code> to change the state of the input textarea to error.',
            markup: error,
            dark: false,
        },
        {
            name: 'Automatic',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-textarea--auto</code> to change the state of the input textarea to auto expand.',
            markup: auto,
            dark: false,
        },
        {
            name: 'Horizontal',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-textarea--h</code> to change the state of the input textarea to horizontal expand.',
            markup: horizontal,
            dark: false,
        },
        {
            name: 'Disabled',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-textarea--disabled</code> to change the state of the input textarea to disabled.',
            markup: disabled,
            dark: false,
        },
        {
            name: 'Text Disabled',
            description:
                'Use the modifier classes <code class="pier-body-text__inline-code">pier-input-textarea--d</code> to disable text of the input textarea.',
            markup: textDisabled,
            dark: false,
        },
        {
            name: 'Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-textarea--dark</code> to change the style of the input textarea for dark UI themes.',
            markup: dark,
            dark: true,
        },
        {
            name: 'Error Dark',
            description:
                'Use the modifier class <code class="pier-body-text__inline-code">pier-input-textarea--dark pier-input-textarea--error</code> to change the style of the input textarea to error for dark UI themes.',
            markup: errorDark,
            dark: true,
        },
    ],
    'react-import': `import { InputTextArea } from "pier-design-system"`,
    'react-components': [
        {
            name: '<InputTextArea>',
            props: [
                {
                    name: 'name',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'The name of the input textarea.',
                },
                {
                    name: 'placeholder',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'The placeholder content of the input textarea.',
                },
                {
                    name: 'value',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: '',
                },
                {
                    name: 'onChange',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Fires the moment when the value of the input textarea is changed',
                },
                {
                    name: 'onMouseEnter',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input textarea hover in',
                },
                {
                    name: 'onMouseLeave',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input textarea hover out',
                },
                {
                    name: 'onBlur',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input textarea when focus has left the input textarea',
                },
                {
                    name: 'onFocus',
                    type: 'func',
                    isRequired: false,
                    default: '',
                    description: 'Event handler on input textarea when on focus',
                },
                {
                    name: 'size',
                    type: `string; one of: "xs", "sm", "md", "lg"`,
                    isRequired: false,
                    default: 'md',
                    description: 'Set the size of the input textarea.',
                },
                {
                    name: 'disabled',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input textarea to it's disabled state.",
                },
                {
                    name: 'cap',
                    type: `string; one of: "cap", "none", "right", "left"`,
                    isRequired: false,
                    default: 'none',
                    description: 'Sets the cap of the input textarea.',
                },
                {
                    name: 'pill',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes the input textarea pill',
                },
                {
                    name: 'error',
                    type: 'bool',
                    isRequired: false,
                    default: 'false',
                    description: 'Makes the input textarea error',
                },
                {
                    name: 'dark',
                    type: 'bool',
                    isRequired: false,
                    default: false,
                    description: "Set the input textarea to it's dark theme.",
                },
                {
                    name: 'resize',
                    type: `string; one of: "auto", "horizontal", "vertical"`,
                    isRequired: false,
                    default: 'vertical',
                    description: 'Can resize the input textarea',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the input textarea',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the input textarea.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
