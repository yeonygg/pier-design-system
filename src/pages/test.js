import { InputGroup, InputText, Form, Button, InputSelect, InputTextArea, InputRadio, InputToggle, InputCheckbox } from 'dist';
import { Fragment } from 'react';

import Breadcrumbs from 'src/pier-design-system/components/breadcrumbs/Breadcrumbs';
import BreadcrumbsLink from 'src/pier-design-system/components/breadcrumbs/BreadcrumbsLink';

export default function TestPage() {
    return (
        <Fragment>
            <Form>
                <InputGroup label="name">
                    <InputText placeholder="Enter text"></InputText>
                </InputGroup>
                <InputGroup label="select" error="*required">
                    <InputSelect>
                        {' '}
                        <option value="">Select your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                        <option value="5">Option 5</option>
                    </InputSelect>
                </InputGroup>
                <InputGroup label="enter input text">
                    {' '}
                    <InputTextArea className="-m-b-6" placeholder="Enter Text"></InputTextArea>
                </InputGroup>

                <div>
                    {' '}
                    <InputCheckbox className="-m-b-6 -m-r-10">Test 1</InputCheckbox> <InputCheckbox>Test 2</InputCheckbox>
                </div>
                <InputGroup label="radio Input label" error="*required">
                    <InputRadio className="-m-r-10" name="example-1">
                        Test 1
                    </InputRadio>{' '}
                    <InputRadio className="-m-r-10" name="example-1">
                        Test 2
                    </InputRadio>
                    <InputRadio className="-m-r-10" name="example-1">
                        Test 3
                    </InputRadio>
                </InputGroup>
                <div>
                    <InputToggle className="-m-b-6">Test Toggle</InputToggle>
                </div>
                <div>
                    <Button>Submit</Button>
                </div>
            </Form>
        </Fragment>
    );
}
