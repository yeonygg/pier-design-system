import ReactDOMServer from "react-dom/server";
import base from "./base";

export default {
	title: "Navigation",
	slug: "navigation",
	description: "This is a description for navigation.",
	"last-updated": "3/25/21",
	variations: [
		{
			name: "Base",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(base),
			dark: false,
		},
	],
};
