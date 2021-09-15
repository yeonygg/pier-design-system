**Pier Documentation Helper**

### 📁 Components

> 📁 _[component name]_

Folder for the component

> > 📄 _\data.js_

Follow the file structure below to add documentation data. Import variations as variables to be used in the `ReactDOMServer.renderToStaticMarkup()` function in the `markup:` property. If you desire a dark background on your variation, pass `true` inside the `dark:` property.

```js
import { variation1, variation2 } from './variations';

export default {
    title: 'Component Title',
    slug: 'component-slug',
    description: 'Component description',
    'last-updated': '1/1/21',
    image: '/component_icons/img',
    imageColor: '/component_icons/img',
    variations: [
        {
            name: 'Variation 1',
            description: 'Variation 1 description',
            markup: variation1,
            dark: false,
        },
        {
            name: 'Variation 2',
            description: 'Variation 2 description',
            markup: variation2,
            dark: false,
        },
    ],
};
```

> > 📄 _\variations.js_

Add your variation JSX like so:

```js
export const variation = ReactDOMServer.renderToStaticMarkup(<div className="example-class">Example Component</div>);
```

[Learn more about JSX](https://reactjs.org/docs/introducing-jsx.html)

> 📄 _\_componentsData.js_

Import the `data.js` file from the component folder into `_componentsData.js` and add it to the list of components being pushed to `componentsData` to render it to the webpage.

### 📁 Utilities

> 📄 _[utility].js_

Page data and examples of the types of utility classes.

> 📄 _\_utilitiesData.js_

Imports the all the utilities.

### 📄 API.js

Imports all of the documenation data for the apps API.

_WIP_
