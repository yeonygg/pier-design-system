import { structure } from './variations';
import { reactDemo } from './reactDemo';

export default {
    title: 'Screen',
    slug: 'screen',
    description: 'The Screen component is used as a fixed container to the browser viewport.',
    'last-updated': '9/17/21',
    image: '/component_icons/screen.svg',
    imageColor: '/component_icons/screen_ro.svg',
    variations: [
        {
            name: 'Structure',
            description: 'Use the base class <code class="pier-body-text__inline-code">pier-screen</code> to wrap elements pinned to the browser viewport.',
            markup: structure,
            dark: false,
        },
    ],
    'react-import': `import { Screen } from "pier-design-system"`,
    'react-components': [
        {
            name: '<Screen>',
            props: [
                {
                    name: 'children',
                    type: 'node',
                    isRequired: true,
                    default: '',
                    description: 'The content to be displayed inside of the Screen.',
                },
                {
                    name: 'className',
                    type: 'string',
                    isRequired: false,
                    default: '',
                    description: 'Add classes onto the Screen wrapper.',
                },
                {
                    name: 'style',
                    type: 'object',
                    isRequired: false,
                    default: '',
                    description: 'Add extra styling onto the Screen wrapper.',
                },
            ],
        },
    ],
    'react-demo': reactDemo,
};
