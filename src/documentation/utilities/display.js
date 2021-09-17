export default {
    title: 'Display',
    slug: 'display',
    description: 'This is a description for display.',
    'last-updated': '4/19/21',
    variations: [
        {
            class: '-d-none, -d-[grid-breakpoints]-none',
            description:
                "This property essentially removes the element completely from the document. Example: '-d-sm-none' removes the elements at the small breakpoint",
        },
        {
            class: '-d-inline, -d-[grid-breakpoints]-inline',
            description:
                "This property generates one or more inline element boxes that do not make line breaks before or after themselves. Example: '-d-md-inline' will have elements inline for all medium breakpoints",
        },
        {
            class: '-d-inline-block, -d-[grid-breakpoints]-inline-block',
            description:
                "This property is used to display an element as an inline-level block container. Example: '-d-lg-inline-block' makes display elements in the large breakpoint inline-block",
        },
        {
            class: '-d-block, -d-[grid-breakpoints]-block',
            description:
                "This property generates a block element box, generating line breaks both before and after the element when in the normal flow. Example: '-d-sm-block' displays elements in the small breakpoint block",
        },
        {
            class: '-d-table, -d-[grid-breakpoints]-table',
            description: "This property makes the element behave like a table. Example: '-d-md-table' displays elements in the md breakpoint in a table",
        },
        {
            class: '-d-table-row, -d-[grid-breakpoints]-table-row',
            description:
                "Is a corresponding element to 'd-table' and defines a row of cells in table. Example: '-d-md-table-row' defines a row of cells in a medium breakpoint table",
        },
        {
            class: '-d-table-cell, -d-[grid-breakpoints]-table-cell',
            description:
                "Is a corresponding element to 'd-table' and defines a cell of a table that contains data. Example: '-d-md-table-cell' defines cells in a medium breakpoint table",
        },
        {
            class: '-d-flex, -d-[grid-breakpoints]-flex',
            description: "Makes display property flex. Example: '-d-lg-flex' makes display in the large breakpoints flex",
        },
        {
            class: '-d-inline-flex, -d-[grid-breakpoints]-inline-flex',
            description: "Makes display property inline-flex. Example: '-d-lg-inline-flex' makes display in the large breakpoints inline-flex",
        },
    ],
};
