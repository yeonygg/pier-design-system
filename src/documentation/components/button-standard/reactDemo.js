import jsxToString from 'jsx-to-string';
import { Button, Section, BodyText } from 'dist';

export const reactDemo = jsxToString(
    <Button title="Button" icon="fas fa-atom" size="md" theme="standard" disabled={false} dark={false} pill={false}>
        Button Text
    </Button>
);
