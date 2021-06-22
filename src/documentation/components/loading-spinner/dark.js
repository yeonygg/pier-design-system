import { Fragment } from 'react';

export default (
    <Fragment>
    <svg className="pier-loading-spinner" preserveAspectRatio="xMaxYMid meet" viewBox="0 0 100 100" height="50px" width="50px">
    <defs>
        <linearGradient id="gradient1" x2="1" y2="0">
            <stop offset="20%" stopColor="#25B9EF"></stop>
            <stop offset="100%" stopColor="#08D18B"></stop>
        </linearGradient>
        <linearGradient id="gradient2" x2="1" y2="0">
            <stop offset="20%" stopColor="#25B9EF"></stop>
            <stop offset="100%" stopColor="rgba(0,255,255,0)"></stop>
        </linearGradient>
        <mask id="clip-rectangle">
            <circle cx="50" cy="50" r="50" fill="#fff"></circle>
            <circle cx="50" cy="50" r="43"></circle>
        </mask>
    </defs>
    <path fill="url(#gradient1)" d="M0 0H100V50H0z" mask="url(#clip-rectangle)"></path>
    <path fill="url(#gradient2)" d="M0 50H100V100H0z" mask="url(#clip-rectangle)"></path>
    </svg>
    </Fragment>
);