import jsxToString from 'jsx-to-string';
import { Form, Section, BodyText, Label, InputText, InputGroup, InputSelect, InputTextArea, InputCheckbox, InputRadio, InputToggle, Button } from 'dist';

export const reactDemo = jsxToString(
    <Form>
        <Label>NAME</Label>
        <InputText className="-m-b-6" placeholder="Enter Text"></InputText>
        <InputGroup>
            <Label>select</Label>
            <InputSelect>
                {' '}
                <option value="">Select your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
            </InputSelect>
            <BodyText size="xs" className="-c-gray-3">
                *required
            </BodyText>
        </InputGroup>
        <Label>text input label</Label>
        <InputTextArea className="-m-b-6" placeholder="Enter Text"></InputTextArea>
        <div>
            {' '}
            <InputCheckbox className="-m-b-6 -m-r-10">Test 1</InputCheckbox> <InputCheckbox>Test 2</InputCheckbox>
        </div>
        <InputGroup label="radio Input label">
            <Label>radio Input label</Label>
            <InputRadio className="-m-r-10">Test 1</InputRadio> <InputRadio className="-m-r-10">Test 2</InputRadio>
            <InputRadio className="-m-r-10">Test 3</InputRadio>
            <BodyText size="xs" className="-c-gray-3">
                *required
            </BodyText>
        </InputGroup>
        <InputToggle className="-m-b-6">Test Toggle</InputToggle>
        <div>
            <Button>Submit</Button>
        </div>
    </Form>
);
