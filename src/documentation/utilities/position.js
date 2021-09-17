export default {
    title: 'Position',
    slug: 'position',
    description: 'This is a description for position.',
    'last-updated': '4/19/21',
    variations: [
        {
            class: '-pos-relative',
            description: 'Makes position property relative',
        },
        {
            class: '-pos-fixed',
            description: 'Makes position property fixed',
        },
        {
            class: '-pos-static',
            description: 'Makes position property static',
        },
        {
            class: '-pos-absolute',
            description: 'Makes position property absolute',
        },
        {
            class: '-pos-absolute-[t, b, l, r, tl, tr, bl, br, tc, bc, lc, rc, c]',
            description: "Specified position for absolute positioning. Example: '-pos-absolute-tl' makes the top: 0 and left: 0",
        },
    ],
};
