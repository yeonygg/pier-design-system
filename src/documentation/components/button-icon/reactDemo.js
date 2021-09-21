import jsxToString from 'jsx-to-string';
import { IconButton, Section, BodyText } from 'dist';

export const reactDemo = jsxToString(<IconButton title="Button" icon="fas fa-pen" size="md" disabled={false} dark={false} pill={false}></IconButton>);
