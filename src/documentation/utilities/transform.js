export default {
    title: 'Transform',
    slug: 'transform',
    description: 'This is a description for transform.',
    'last-updated': '4/19/21',
    variations: [
        {
            class: '-t-rotate-[0, 90, 180, 270, 360]',
            description: "Transform rotation by specified angle. Example: '-t-rotate-90' rotates element by 90 degrees",
        },
        {
            class: '-t-scale-[0, 100]',
            description: "Transform scale by specified percentage size. Example: '-t-scalee-50' scales element by 50%",
        },
        {
            class: '-t-scale-x-[0, 100]',
            description: "Transform scale x by specified percentage size. Example: '-t-scalee-x-50' scales x by 50%",
        },
        {
            class: '-t-scale-y-[0, 100]',
            description: "Transform scale y by specified percentage size. Example: '-t-scalee-y-50' scales y by 50%",
        },
    ],
};
