import jsxToString from 'jsx-to-string';
import { InputCheckbox, Section, BodyText, InputCombo, InputText, Button } from 'dist';

export const reactDemo = jsxToString(
    <InputCombo size="md" error={false}>
        <InputText cap="left" dark={false} placeholder="Enter Text"></InputText>
        <Button cap="right" dark={false}>
            Submit
        </Button>
    </InputCombo>
);
