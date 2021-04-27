export default {
    title: 'Spacing',
    slug: 'spacing',
    description: 'This is a description for spacing.',
    'last-updated': '4/19/21',
    variations: [
        {
            class: '-m-[t, b, l, r, v, h, a]-[0-12, auto]-[grid-breakpoints]',
            description: "Add specified margin. Example: '-m-r-2-sm' Add 4px of margin-right at breakpoint sm.",
        },
        {
            class: '-p-[t, b, l, r, v, h, a]-[0-12, auto]-[grid-breakpoints]',
            description: "Add specified padding. Example: '-p-r-2-sm' Add 4px of padding-right at breakpoint sm.",
        },
    ],
};
