import { Fragment } from 'react';

import { Accordion } from 'dist/index.js';

export default function TestPage() {
    console.log(Accordion.toString());

    return (
        <Fragment>
            <Accordion></Accordion>
        </Fragment>
    );
}
