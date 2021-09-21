import jsxToString from 'jsx-to-string';
import { InputCheckbox, Section, BodyText } from 'dist';

export const reactDemo = jsxToString(
    <InputCheckbox size="md" disabled={false} dark={false} error={false} partial={false}>
        Label
    </InputCheckbox>
);
