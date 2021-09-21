import jsxToString from 'jsx-to-string';
import { InputToggle } from 'dist';
import { Fragment } from 'react';

export const reactDemo = jsxToString(
    <InputToggle size="md" disabled={false} dark={false} error={false}>
        Label
    </InputToggle>
);
