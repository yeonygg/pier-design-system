import { Fragment } from 'react';

export default (
    <Fragment>
        
        <svg className="pier-loading-spinner--sm" viewBox="0 0 100 100" preserveAspectRatio="xMaxYMid meet">
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
                <circle id="outer" cx="50" cy="50" r="50" fill="#ffffff"></circle>
                <circle id="inner" cx="50" cy="50" r="45"></circle>
            </mask>
        </defs>

        <g>
            <rect width="100" height="50" fill="url(#gradient1)" mask="url(#clip-rectangle)"></rect>
            <rect width="100" height="50" y="50" fill="url(#gradient2)" mask="url(#clip-rectangle)"></rect>
        </g>
    </svg>

    </Fragment>
);
