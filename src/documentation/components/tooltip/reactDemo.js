import jsxToString from 'jsx-to-string';
import { Tooltip, Button } from 'dist';

export const reactDemo = jsxToString(
    <Tooltip text="I am a tooltip!">
        <Button>Tooltip</Button>
    </Tooltip>
);
