export default {
    title: 'Text',
    slug: 'text',
    description: 'This is a description for text.',
    'last-updated': '4/19/21',
    variations: [
        {
            class: '-text-code',
            description: 'Class to get codeblock text',
        },
        {
            class: '-text-regular',
            description: 'Class to get regular text',
        },
        {
            class: '-text-italic',
            description: 'Class to make text italic',
        },
        {
            class: '-text-w-[regular, semibold, bold, extrabold]',
            description: "Class to change weight of text. Example: '-text-w-bold' will make text weight bold",
        },
        {
            class: '-text-t-[up, low, cap, none]',
            description: "Text transform. Example: '-text-t-up' makes text UPPERCASE",
        },
        {
            class: '-text-d-[lt, ul, none]',
            description: "Text decoration. Example: '-text-d-ul' makes an unordered list",
        },
        {
            class: '-text-a-[left, right, center, justify]',
            description: "Text align. Example: '-text-a-left' aligns text to the left",
        },
    ],
};
