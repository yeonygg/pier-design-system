import ReactDOMServer from "react-dom/server";

export default {
	title: "Layout",
	slug: "layout",
	description: "This is a description for layout.",
	"last-updated": "4/8/21",
	variations: [
		{
			name: "Base",
			description: "",
			markup: ReactDOMServer.renderToStaticMarkup(),
			dark: false,
		},
	]
};