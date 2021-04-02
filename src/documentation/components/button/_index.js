import ReactDOMServer from "react-dom/server";
import base from "./base";
import sizes from "./sizes";
import disabled from "./disabled";
import pill from "./pill";

export default {
	title: "Button",
	slug: "button",
	description: "This is a description for buttons.",
	"last-updated": "3/30/21",
	variations: [{
			name: "Base",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(base),
			dark: false,
		},
		{
			name: "Sizes",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(sizes),
			dark: false,
		},
		{
			name: "Disabled",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(disabled),
			dark: false,
		},
		{
			name: "Pill",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(pill),
			dark: false,
		},

	],
};