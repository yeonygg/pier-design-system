import jsxToString from 'jsx-to-string';
import { InputSelect } from 'dist';

export const reactDemo = jsxToString(
    <InputSelect size="md" disabled={false} dark={false} error={false} capleft={false} required="">
        <option value="">Select your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
    </InputSelect>
);
