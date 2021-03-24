import base from 'src/documentation/components/text-body/base';
import sizes from 'src/documentation/components/text-body/sizes';
import color from 'src/documentation/components/text-body/color';
import dark from 'src/documentation/components/text-body/dark';

export default {
	"title": "Text - Body",
	"slug": "body-text",
	"description": "This is a description for body text.",
	"last-updated": "3/16/21",
	"variations": [
		{
			"name": "Base",
			"description": "These are the size modifiers.",
			"markup": base,
			"dark": false
		},
		{
			"name": "Sizes",
			"description": "These are the size modifiers.",
			"markup": sizes,
			"dark": false
		},
		{
			"name": "Color",
			"description": "These are the color modifiers.",
			"markup": color,
			"dark": false
		},
		{
			"name": "Dark",
			"description": "This is the dark modifier.",
			"markup": dark,
			"dark": true
		}
	]
}