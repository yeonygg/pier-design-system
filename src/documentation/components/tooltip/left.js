import { Section } from 'dist';
import { Fragment } from 'react';

export default (
    <Fragment>
        <div className="-d-flex -m-l-12">
            <Section></Section>
            <span className="pier-tooltip pier-tooltip--left" data-tooltip="I am a tooltip!">
                <button className="pier-button-standard">Left tooltip</button>
            </span>
        </div>
    </Fragment>
);
