import ReactDOMServer from "react-dom/server";
import base from "./base";

export default {
	title: "Input - Text",
	slug: "input-text",
	description: "This is a description for input-text.",
	"last-updated": "3/30/21",
	variations: [
		{
			name: "Base",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(base),
			dark: false,
		},
	],
};
