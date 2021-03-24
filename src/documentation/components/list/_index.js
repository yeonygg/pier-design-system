import unorderedList from 'src/documentation/components/list/unorderedList';
import orderedList from 'src/documentation/components/list/orderedList';
import sizes from 'src/documentation/components/list/sizes';
import dark from 'src/documentation/components/list/dark';

export default {
	"title": "List",
	"slug": "list",
	"description": "This is a description for list.",
	"last-updated": "3/22/21",
	"variations": [
		{
			"name": "Unordered List",
			"description": "",
			"markup": unorderedList,
			"dark": false
		},
		{
			"name": "Ordered List",
			"description": "",
			"markup": orderedList,
			"dark": false
		},
		{
			"name": "Sizes",
			"description": "These are the size modifiers.",
			"markup": sizes,
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