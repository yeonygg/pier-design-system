import { Fragment } from 'react';
import InputText from 'src/pier-design-system/components/inputs/InputText';
import InputTextArea from 'src/pier-design-system/components/inputs/InputTextArea';
import InputSelect from 'src/pier-design-system/components/inputs/InputSelect';
import InputCheckbox from 'src/pier-design-system/components/inputs/InputCheckbox';
import InputRadio from 'src/pier-design-system/components/inputs/InputRadio';
import InputToggle from 'src/pier-design-system/components/inputs/InputToggle';
import InputGroup from 'src/pier-design-system/components/inputs/InputGroup';
import Form from 'src/pier-design-system/components/inputs/Form';
import Button from 'src/pier-design-system/components/buttons/Button';

export default function TestPage() {
    return (
        <Form className="-p-a-4">
            <InputGroup htmlFor="name" label="Name">
                <InputText name="name" placeholder="Enter your name"></InputText>
            </InputGroup>
            <InputGroup htmlFor="select" label="Select">
                <InputSelect name="select">
                    <option value="" disabled selected>
                        Select your option
                    </option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </InputSelect>
            </InputGroup>
            <InputGroup htmlFor="message" label="Message">
                <InputTextArea name="message" placeholder="Enter your message" style={{ height: '100px' }}></InputTextArea>
            </InputGroup>
            <InputCheckbox name="checkbox1">Test 1</InputCheckbox>
            <InputCheckbox name="checkbox2">Test 2</InputCheckbox>
            <InputGroup htmlFor="radio" label="Radios">
                <InputRadio name="radio">Test 1</InputRadio>
                <InputRadio name="radio">Test 2</InputRadio>
                <InputRadio name="radio">Test 3</InputRadio>
            </InputGroup>
            <InputToggle>Test Toggle</InputToggle>
            <Button type="submit">Submit</Button>
        </Form>
    );
}
