import ReactDOMServer from "react-dom/server";
import base from "src/documentation/components/breadcrumbs/base";
import ellipsis from "src/documentation/components/breadcrumbs/ellipsis";
import dark from "src/documentation/components/breadcrumbs/dark";

export default {
	title: "Breadcrumbs",
	slug: "breadcrumbs",
	description: "This is a description for breadcrumbs.",
	"last-updated": "3/24/21",
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
			markup: ReactDOMServer.renderToStaticMarkup(ellipsis),
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
