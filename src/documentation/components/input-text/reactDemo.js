import jsxToString from 'jsx-to-string';
import { InputText } from 'dist';

export const reactDemo = jsxToString(<InputText placeholder="Enter Text" size="md" disabled={false} dark={false} error={false} capleft={false}></InputText>);
