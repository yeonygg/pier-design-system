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
import Table from 'src/pier-design-system/components/table/Table';
import Accordion from 'src/pier-design-system/components/accordion/Accordion';
import Tag from 'src/pier-design-system/components/tag/Tag';

export default function TestPage() {
    return (
        <Fragment>
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
            <Accordion title="Table" size="sm" inCard>
                <Table
                    columns={['column1', 'column2', 'column3']}
                    data={[
                        { column1: 'item1', column2: 'item2', column3: 'item3' },
                        { column1: 'item4', column2: 'item5', column3: 'item6' },
                        { column1: 'item7', column2: 20, column3: 'item9' },
                    ]}
                    striped
                ></Table>
            </Accordion>
            <Tag pill>Test Tag</Tag>
        </Fragment>
    );
}
