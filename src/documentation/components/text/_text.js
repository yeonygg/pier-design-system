import bodyText from 'src/documentation/components/text/bodyText';
import bodyTextSizes from 'src/documentation/components/text/bodyTextSizes';
import bodyTextColor from 'src/documentation/components/text/bodyTextColor';
import bodyTextDark from 'src/documentation/components/text/bodyTextDark';

export default {
	"title": "Text",
	"slug": "text",
	"description": "This is a description for general text components",
	"last-updated": "3/16/21",
	"components": [
		{
			"name": "Body Text",
			"description": "Use body text when you want to display a paragraph of information.",
			"markup": bodyText,
			"variations": [
				{
					"name": "Sizes",
					"description": "These are the size modifiers.",
					"markup": bodyTextSizes,
					"dark": false
				},
				{
					"name": "Color",
					"description": "These are the color modifiers.",
					"markup": bodyTextColor,
					"dark": false
				},
				{
					"name": "Dark",
					"description": "This is the dark modifier.",
					"markup": bodyTextDark,
					"dark": true
				}
			]
		}
	]
}