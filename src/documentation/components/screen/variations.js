import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const structure = ReactDOMServer.renderToStaticMarkup(
    <div className="pier-screen">
        <p>Content in viewport</p>
    </div>
);
