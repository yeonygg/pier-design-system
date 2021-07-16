import { Fragment } from 'react';
import { Section } from 'dist';

export default (
    <Fragment>
        <Section className="-d-flex">
            <div className="-m-t-8">
                <span className="pier-tooltip pier-tooltip--top" data-tooltip="I am a tooltip!">
                    <button className="pier-button-standard">Base tooltip</button>
                </span>
            </div>
            <div className="-m-t-8 -m-l-6">
                <span className="pier-tooltip pier-tooltip--top pier-tooltip--lg" data-tooltip="I am a tooltip!">
                    <button className="pier-button-standard">Base tooltip</button>
                </span>
            </div>
        </Section>
    </Fragment>
);
