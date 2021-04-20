export default {
	title: "Border",
	slug: "border",
	description: "This is a description for border.",
	"last-updated": "4/19/21",
	variations: [
		{
			class: "-br-[size]-[color]-[shade]",
			description: "Creates a border with the size, color and shade. Example: '-br-2-blue-dark-2' creates a 2px solid blue-dark-2 border."
		},
		{
			class: "-bd-[t, b, l, r, v, h, a]-none, -bd-[t, b, l, r, v, h, a]-0",
			description: "Removes border on specified side."
		},
		{
			class: "-bd-none, -bd-0",
			description: "Removes all borders."
		},
	],
};