import ReactDOMServer from "react-dom/server";
import base from "./base";
import sizes from "./sizes";
import dark from "./dark";

export default {
	title: "Text - Codeblock",
	slug: "text-codeblock",
	description: "This is a description for text- codeblock.",
	"last-updated": "3/25/21",
	variations: [
		{
			name: "Base",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(base),
			dark: false,
		},
		{
			name: "With Ellipsis",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(sizes),
			dark: false,
		},
		{
			name: "Dark",
			description: "This is the dark modifier.",
			markup: ReactDOMServer.renderToStaticMarkup(dark),
			dark: true,
		},
	],
};
