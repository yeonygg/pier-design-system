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



        <svg
            className="pier-loading-spinner -m-l-4"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 35 90 1"
            height="50"
            width="50"
        >
            <defs>
                <linearGradient id="linear-gradient" x1="0.96" y1="40.44" x2="78.88" y2="40.44" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#00ce7c"></stop>
                    <stop offset="1" stopColor="#4ac1e0"></stop>
                </linearGradient>
            </defs>
            <g id="Layer_2" dataname="Layer 2">
                <path
                    className="cls-1"
                    d="M22.12,79H14.5A13.55,13.55,0,0,1,1,65.47v-7A13.56,13.56,0,0,1,14.5,45h9.76V15.41A13.57,13.57,0,0,1,37.81,1.86H65.33A13.57,13.57,0,0,1,78.88,15.41v27.4A13.57,13.57,0,0,1,65.33,56.36H35.67v9.11A13.56,13.56,0,0,1,22.12,79ZM14.5,56.36a2.17,2.17,0,0,0-2.14,2.14v7A2.16,2.16,0,0,0,14.5,67.6h7.62a2.16,2.16,0,0,0,2.14-2.13V56.36ZM35.67,45H65.33a2.17,2.17,0,0,0,2.14-2.14V15.41a2.17,2.17,0,0,0-2.14-2.14H37.81a2.17,2.17,0,0,0-2.14,2.14Z"
                    transform="translate(-0.96 -1.86)"
                    fill="url(#linear-gradient)"
                ></path>
            </g>
        </svg>

        <svg className="-m-l-4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 37 90 1" height="50" width="50">
            <clipPath id="clippy">
                <path
                    className="cls-1"
                    d="M22.12,79H14.5A13.55,13.55,0,0,1,1,65.47v-7A13.56,13.56,0,0,1,14.5,45h9.76V15.41A13.57,13.57,0,0,1,37.81,1.86H65.33A13.57,13.57,0,0,1,78.88,15.41v27.4A13.57,13.57,0,0,1,65.33,56.36H35.67v9.11A13.56,13.56,0,0,1,22.12,79ZM14.5,56.36a2.17,2.17,0,0,0-2.14,2.14v7A2.16,2.16,0,0,0,14.5,67.6h7.62a2.16,2.16,0,0,0,2.14-2.13V56.36ZM35.67,45H65.33a2.17,2.17,0,0,0,2.14-2.14V15.41a2.17,2.17,0,0,0-2.14-2.14H37.81a2.17,2.17,0,0,0-2.14,2.14Z"
                    transform="translate(-0.96 -1.86)"
                    fill="#233546"
                ></path>
            </clipPath>
            <rect className="loader-animation" clipPath="url(#clippy)" width="80" height="105" />

            <defs>
                <linearGradient id="linear-gradient" x1="0.96" y1="40.44" x2="78.88" y2="40.44" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#00ce7c"></stop>
                    <stop offset="1" stopColor="#4ac1e0"></stop>
                </linearGradient>
            </defs>
            <g id="Layer_2" dataname="Layer 2"></g>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 50 125 1" height="50" width="50">
            <defs>
                <linearGradient id="linear-gradient" x1="24.92" y1="77.18" x2="134.22" y2="77.18" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#00ce7c"></stop>
                    <stop offset="1" stopColor="#4ac1e0"></stop>
                </linearGradient>
            </defs>
            <g id="Layer_2" dataname="Layer 2">
                <path
                    class="path"
                    stroke="url(#linear-gradient)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16px"
                    d="M43.92,123.29a11,11,0,0,1-11-11v-9.78a11,11,0,0,1,11-11h71.3a11,11,0,0,0,11-11V42.07a11,11,0,0,0-11-11H76.61a11,11,0,0,0-11,11v70.22a11,11,0,0,1-11,11Z"
                    transform="translate(-24.92 -23.07)"
                ></path>
            </g>
        </svg>


    </Fragment>
);
