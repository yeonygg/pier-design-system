import ReactDOMServer from "react-dom/server";
import base from "./base";
import partial from "./partial";
import sizes from "./sizes";
import error from "./error";
import dark from "./dark";
import errorDark from "./error-dark";
import partialDark from "./partial-dark";


export default {
	title: "Input - Checkbox",
	slug: "input-checkbox",
	description: "This is a description for input-checkbox.",
	"last-updated": "4/6/21",
	variations: [
		{
			name: "Base",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(base),
			dark: false,
		},
		{
			name: "Partial",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(partial),
			dark: false,
		},
		{
			name: "Sizes",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(sizes),
			dark: false,
		},
		{
			name: "Error",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(error),
			dark: false,
		},
		{
			name: "Dark",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(dark),
			dark: true,
		},
		{
			name: "Partial Dark",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(partialDark),
			dark: true,
		},
		{
			name: "Error Dark",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(errorDark),
			dark: true,
		}
	],
};
