import jsxToString from 'jsx-to-string';
import { InputRadio, Section, BodyText } from 'dist';
import { Fragment } from 'react';

export const reactDemo = jsxToString(
    <div>
        <InputRadio size="md" disabled={false} dark={false} error={false} name="example-1" className="-m-r-4">
            Label
        </InputRadio>
        <InputRadio size="md" disabled={false} dark={false} error={false} name="example-1">
            Label
        </InputRadio>
    </div>
);
