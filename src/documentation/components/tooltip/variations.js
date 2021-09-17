import { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';

export const base = ReactDOMServer.renderToStaticMarkup(
    <span className="pier-tooltip pier-tooltip--top" data-tooltip="I am a tooltip!">
        <button className="pier-button-standard -m-a-4">Base Tooltip</button>
    </span>
);

export const sizes = ReactDOMServer.renderToStaticMarkup(
    <div className="-d-flex">
        <span className="pier-tooltip pier-tooltip--top" data-tooltip="I am a tooltip!">
            <button className="pier-button-standard -m-a-4">Medium Tooltip</button>
        </span>
        <span className="pier-tooltip pier-tooltip--top pier-tooltip--lg" data-tooltip="I am a tooltip!">
            <button className="pier-button-standard -m-a-4">Large Tooltip</button>
        </span>
    </div>
);

export const position = ReactDOMServer.renderToStaticMarkup(
    <div className="-d-flex">
        <span className="pier-tooltip pier-tooltip--top" data-tooltip="I am a tooltip!">
            <button className="pier-button-standard -m-a-4">Bottom Tooltip</button>
        </span>
        <span className="pier-tooltip pier-tooltip--bottom" data-tooltip="I am a tooltip!">
            <button className="pier-button-standard -m-a-4">Bottom Tooltip</button>
        </span>
        <span className="pier-tooltip pier-tooltip--left" data-tooltip="I am a tooltip!">
            <button className="pier-button-standard -m-a-4">Left Tooltip</button>
        </span>
        <span className="pier-tooltip pier-tooltip--right" data-tooltip="I am a tooltip!">
            <button className="pier-button-standard -m-a-4">Right Tooltip</button>
        </span>
    </div>
);

export const dark = ReactDOMServer.renderToStaticMarkup(
    <span className="pier-tooltip pier-tooltip--top pier-tooltip--dark" data-tooltip="I am a tooltip!">
        <button className="pier-button-standard -m-a-4">Dark Tooltip</button>
    </span>
);
