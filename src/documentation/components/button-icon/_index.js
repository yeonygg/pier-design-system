import ReactDOMServer from "react-dom/server";
import base from "./base";
import sizes from "./sizes";
import disabled from "./disabled";
import pill from "./pill";
import test_hovers from "./test_hovers";


export default {
	title: "Button-icon",
	slug: "button-icon",
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
		{
			name: "Test Hovers",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(test_hovers),
			dark: false,
		},

	],
};