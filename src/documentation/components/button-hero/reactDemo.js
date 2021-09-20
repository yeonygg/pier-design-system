import jsxToString from 'jsx-to-string';
import { Button, Section, BodyText } from 'dist';

export const reactDemo = jsxToString(
    <Button title="Button" icon="fas fa-atom" size="md" theme="hero" disabled={false} dark={false}>
        Button Text
    </Button>
);
