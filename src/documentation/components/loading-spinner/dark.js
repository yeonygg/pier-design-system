import { Fragment } from 'react';

export default (
    <Fragment>
    <svg className="pier-loading-spinner" width="50" height="50">
    <defs>
        <linearGradient id="gradient1" x2="1" y2="0">
            <stop offset="20%" stopColor="#25B9EF" />
            <stop offset="100%" stopColor="#08D18B" />
        </linearGradient>
        <linearGradient id="gradient2" x2="1" y2="0">
            <stop offset="20%" stopColor="#25B9EF" />
            <stop offset="100%" stopColor="rgba(0,255,255,0)" />
        </linearGradient>
<mask id="clip-rectangle">
        <circle id="outer" cx="25" cy="25" r="25" fill="#ffffff"></circle> 
        <circle id="inner" cx="25" cy="25" r="21"></circle> 
    </mask>

    </defs>

    <g>
    <rect width="50" height="25" fill="url(#gradient1)" style={{ mask: 'url(#clip-rectangle)' }}></rect>
    <rect width="50" height="25" y="25" fill="url(#gradient2)" style={{ mask: 'url(#clip-rectangle)' }}></rect>
    </g>

</svg>
    </Fragment>
);