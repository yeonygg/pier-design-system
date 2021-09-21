import jsxToString from 'jsx-to-string';
import { Section, BodyText, InputText, InputGroup, Label } from 'dist';

export const reactDemo = jsxToString(
    <InputGroup size="md" error={false} dark={false}>
        <Label>text input label</Label>
        <InputText placeholder="Enter Text"></InputText>
        <p className="pier-input-group__validation">*required</p>
    </InputGroup>
);
