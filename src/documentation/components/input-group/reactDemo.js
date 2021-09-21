import jsxToString from 'jsx-to-string';
import { InputText, InputGroup } from 'dist';

export const reactDemo = jsxToString(
    <InputGroup label="enter input text" size="md" error="*required" dark={false}>
        <InputText placeholder="Enter Text"></InputText>
    </InputGroup>
);
