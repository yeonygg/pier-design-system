import jsxToString from 'jsx-to-string';
import { InputTextArea } from 'dist';

export const reactDemo = jsxToString(
    <InputTextArea placeholder="Enter Text" size="md" disabled={false} dark={false} error={false}></InputTextArea>
);
