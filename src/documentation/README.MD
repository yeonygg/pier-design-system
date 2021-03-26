**Pier Documentation Helper**

### 📁 Abstracts

*WIP*

### 📁 Components

>📁 *[component name]*

Folder for the component

>>📄 *_index.js*

Follow the file structure below to add documentation data. Import variations as variables to be used in the `ReactDOMServer.renderToStaticMarkup()` function in the `markup:` property. If you desire a dark background on your variation, pass `true` inside the `dark:` property.

```js
import ReactDOMServer from  "react-dom/server";
import variation1 from  "./variation1";
import variation2 from  "./variation2";

export default {
	title: "Component Title",
	slug: "component-slug",
	description: "Component description",
	"last-updated": "1/1/21",
	variations: [
		{
		name: "Variation 1",
		description: "Variation 1 description",
		markup: ReactDOMServer.renderToStaticMarkup(variation1),
		dark: false,
		},
		{
		name: "Variation 2",
		description: "Variation 2 description",
		markup: ReactDOMServer.renderToStaticMarkup(variation2),
		dark: false,
		}
	]
};
```

>>📄 *[variation].js*

Add your variation JSX like so:
```js
export default (
	<div className="example-class">Example Component</div>
);
```

[Learn more about JSX](https://reactjs.org/docs/introducing-jsx.html)

>📄 *_componentsData.js*

Import the `_index.js` file from the component folder into `_componentsData.js` and add it to the list of components being pushed to `componentsData` to render it to the webpage.

### 📁 Utilities

*WIP*