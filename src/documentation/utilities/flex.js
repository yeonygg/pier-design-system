export default {
    title: 'Flex',
    slug: 'flex',
    description: 'This is a description for flex.',
    'last-updated': '4/19/21',
    variations: [
        {
            class: '-flex-row, -flex-[grid-breakpoints]-row',
            description: "Sets flex direction from left to right. Example: '-flex-md-row' sets the flex direction from left to right in the md breakpoint",
        },
        {
            class: '-flex-column, -flex-[grid-breakpoints]-column',
            description: "Sets flex direction from top to bottom. Example: '-flex-md-column' sets the flex direction from top to bottom in the md breakpoint",
        },
        {
            class: '-flex-row-reverse, -flex-[grid-breakpoints]-row-reverse',
            description:
                "Sets flex direction from right to left. Example: '-flex-md-row-reverse' sets the flex direction from right to left in the md breakpoint",
        },
        {
            class: '-flex-column-reverse, -flex-[grid-breakpoints]-column-reverse',
            description:
                "Sets flex direction from bottom to top. Example: '-flex-md-column-reverse' sets the flex direction from bottom to top in the md breakpoint",
        },
        {
            class: '-flex-wrap, -flex-[grid-breakpoints]-wrap',
            description: "Allows items to wrap to next line as needed. Example: '-flex-md-wrap' makes items wrap to next line at medium breakpoint",
        },
        {
            class: '-flex-nowrap, -flex-[grid-breakpoints]-nowrap',
            description: "All flex items will be on one line. Example: '-flex-md-nowrap' makes items remain on one line at medium breakpoint",
        },
        {
            class: '-flex-wrap-reverse, -flex-[grid-breakpoints]-wrap-reverse',
            description:
                "Flex items will wrap onto multiple lines from bottom to top. Example: '-flex-md-wrap-reverse' makes items wrap onto multiple lines from bottom to top at medium breakpoint",
        },
        {
            class: '-justify-content-start, -justify-content-[grid-breakpoints]-start',
            description:
                "Items are packed toward the start of the flex-direction horizontally. Example: '-justify-content-md-start' makes items start of the flex-direction horizontally in the medium breakpoint",
        },
        {
            class: '-justify-content-end, -justify-content-[grid-breakpoints]-end',
            description:
                "Items are packed toward the end of the flex-direction horizontally. Example: '-justify-content-md-end' makes items end of the flex-direction horizontally in the medium breakpoint",
        },
        {
            class: '-justify-content-center, -justify-content-[grid-breakpoints]-center',
            description:
                "Items are packed at the center of the flex-direction horizontally. Example: '-justify-content-md-center' makes items center at the flex-direction horizontally in the medium breakpoint",
        },
        {
            class: '-justify-content-between, -justify-content-[grid-breakpoints]-between',
            description:
                "Items are evenly distributed in the line. Example: '-justify-content-md-between' makes items evenly distributed in the medium breakpoint",
        },
        {
            class: '-justify-content-around, -justify-content-[grid-breakpoints]-around',
            description:
                "Items are evenly distributed in the line with equal space around them. Example: '-justify-content-md-around' makes items evenly distributed with equal space around them in the medium breakpoint",
        },
        {
            class: '-align-items-start, -align-items-[grid-breakpoints]-start',
            description:
                "Items are placed at the start of the cross axis. Example: '-align-items-md-start' place items at the start of the cross axis in the medium breakpoint",
        },
        {
            class: '-align-items-end, -align-items-[grid-breakpoints]-end',
            description:
                "Items are placed at the end of the cross axis. Example: '-align-items-md-end' place items at the end of the cross axis in the medium breakpoint",
        },
        {
            class: '-align-items-center, -align-items-[grid-breakpoints]-center',
            description:
                "Items are centered at the cross axis. Example: '-align-items-md-center' place items at the center of the cross axis in the medium breakpoint",
        },
        {
            class: '-align-items-baseline, -align-items-[grid-breakpoints]-baseline',
            description:
                "Items are aligned such as their baselines align. Example '-align-items-md-baseline' aligns such as their baselines align in the medium breakpoint",
        },
        {
            class: '-align-items-stretch, -align-items-[grid-breakpoints]-stretch',
            description: "Items stretch to fill the container. Example: '-align-items-md-stretch' stretches items to fill the medium breakpoint",
        },
        {
            class: '-align-content-start, -align-content-[grid-breakpoints]-start',
            description:
                "Items are aligned at the vertical start. Example: '-align-items-md-start' aligns items at the vertical start in the medium breakpoint",
        },
        {
            class: '-align-content-end, -align-content-[grid-breakpoints]-end',
            description: "Items are aligned at the vertical end. Example: '-align-items-md-end' aligns items at the vertical end in the medium breakpoint",
        },
        {
            class: '-align-content-center, -align-content-[grid-breakpoints]-center',
            description:
                "Items are aligned at the vertical center. Example: '-align-items-md-center' aligns items at the vertical center in the medium breakpoint",
        },
        {
            class: '-align-content-between, -align-content-[grid-breakpoints]-between',
            description:
                "Items are evenly distributed vertically. Example: '-align-content-md-between' makes items evenly distributed vertically in the medium breakpoint",
        },
        {
            class: '-align-content-around, -align-content-[grid-breakpoints]-around',
            description:
                "Items are evenly distributed vertically with equal space around them. Example: '-align-content-md-around' makes items evenly distributed vertically with equal space around them in the medium breakpoint",
        },
        {
            class: '-align-content-stretch, -align-content-[grid-breakpoints]-stretch',
            description:
                "Lines stretch to take up the remaining space. Example: '-align-content-md-stretch' will stretch lines to take up all the space in medium breakpoint",
        },
        {
            class: '-align-self-auto, -align-self-[grid-breakpoints]-auto',
            description:
                "This property overrides a grid or flex item's align-items value. '-align-self-md-auto' will override a grid or flex item's align-items value at the medium breakpoint",
        },
        {
            class: '-align-self-start, -align-self-[grid-breakpoints]-start',
            description:
                "Aligns the items to be flush with the edge of the alignment container corresponding to the item's start side in the cross axis. Example: '-align-self-md-start' aligns the items to be flush in the start of the medium breakpoint",
        },
        {
            class: '-align-self-end, -align-self-[grid-breakpoints]-end',
            description:
                "Aligns the items to be flush with the edge of the alignment container corresponding to the item's end side in the cross axis. Example: '-align-self-md-end' aligns the items to be flush in the end of the medium breakpoint",
        },
        {
            class: '-align-self-center, -align-self-[grid-breakpoints]-center',
            description:
                "The flex item's margin box is centered within the line on the cross-axis. Example: '-align-self-md-center' The flex item's margin box is centered at the medium breakpoint",
        },
        {
            class: '-align-self-baseline, -align-self-[grid-breakpoints]-baseline',
            description:
                "The flex item's margin box is aligned at the  baseline on the cross-axis. Example: '-align-self-md-baseline' The flex item's margin box is aligned at the baseline of the medium breakpoint",
        },
        {
            class: '-align-self-stretch, -align-self-[grid-breakpoints]-stretch',
            description:
                "The flex item's margin box is stretched on the cross-axis. Example: '-align-self-md-stretch' The flex item's margin box is stretched at the medium breakpoint",
        },
    ],
};
