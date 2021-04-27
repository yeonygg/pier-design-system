import ReactDOMServer from "react-dom/server";
import base from "./base";
import sizes from "./sizes";
import error from "./error";
import disabled from "./disabled";
import dark from "./dark";
import errorDark from "./error-dark";



export default {
	title: "Input - Radio",
	slug: "input-radio",
	description: "This is a description for input-radio.",
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
			name: "Error",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(error),
			dark: false,
		},
		{
			name: "Disabled",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(disabled),
			dark: false,
		},
		{
			name: "Dark",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(dark),
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
