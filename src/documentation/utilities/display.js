export default {
    title: 'Display',
    slug: 'display',
    description: 'This is a description for display.',
    'last-updated': '4/19/21',
    variations: [
        {
            class: '-d-none, -d-[grid-breakpoints]-none',
            description: "Hides elements. Hides elements at certain breakpoints. Example: '-d-sm-none' hides the elements at the small breakpoint",
        },
        {
            class: '-d-inline, -d-[grid-breakpoints]-inline',
            description:
                "Generates one or more inline element boxes that do not make line breaks before or after themselves. In normal flow, the next element will be on the same line if there is space. Example: '-d-md-inline' makes a breal",
        },
        {
            class: '-d-inline-block, -d-[grid-breakpoints]-inline-block',
            description: '',
        },
        {
            class: '-d-block, -d-[grid-breakpoints]-block',
            description: '',
        },
        {
            class: '-d-table, -d-[grid-breakpoints]-table',
            description: '',
        },
        {
            class: '-d-table-row, -d-[grid-breakpoints]-table-row',
            description: '',
        },
        {
            class: '-d-table-cell, -d-[grid-breakpoints]-table-cell',
            description: '',
        },
        {
            class: '-d-flex, -d-[grid-breakpoints]-flex',
            description: '',
        },
        {
            class: '-d-inline-flex, -d-[grid-breakpoints]-inline-flex',
            description: '',
        },
    ],
};
