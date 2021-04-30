import { Fragment } from 'react';
import InputText from 'src/pier-design-system/components/inputs/InputText';
import InputTextArea from 'src/pier-design-system/components/inputs/InputTextArea';
import InputSelect from 'src/pier-design-system/components/inputs/InputSelect';
import InputCheckbox from 'src/pier-design-system/components/inputs/InputCheckbox';
import InputRadio from 'src/pier-design-system/components/inputs/InputRadio';

export default function TestPage() {
    return (
        <Fragment>
            <InputText className="-m-v-2"></InputText>
            <InputTextArea className="-m-v-2"></InputTextArea>
            <InputSelect className="-m-v-2">
                <option value="" disabled selected>
                    Select your option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </InputSelect>
            <InputCheckbox>On/Off</InputCheckbox>
            <InputRadio name="1">1</InputRadio>
            <InputRadio name="1">2</InputRadio>
            <InputRadio name="1">3</InputRadio>
        </Fragment>
    );
}
