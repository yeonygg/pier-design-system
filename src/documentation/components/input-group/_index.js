import ReactDOMServer from "react-dom/server";
import base from "./base";
import sizes from "./sizes";
import errors from "./errors";


export default {
	title: "Input - Group",
	slug: "input-group",
	description: "This is a description for input-group.",
	"last-updated": "4/6/21",
	variations: [
		{
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
			name: "Errors",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(errors),
			dark: false,
		},
	],
};
