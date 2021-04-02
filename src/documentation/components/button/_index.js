import ReactDOMServer from "react-dom/server";
import base from "./base";
import sizes from "./sizes";

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

	],
};