import jsxToString from 'jsx-to-string';
import { BubbleMenu, BubbleMenuItem, BubbleMenuLabel, IconButton } from 'dist';

export const reactDemo = jsxToString(
    <div style={{ height: '300px' }}>
        <div>
            <IconButton icon="fas fa-pen"></IconButton>
            <BubbleMenu open position="bottom right">
                <BubbleMenuLabel>Alerts</BubbleMenuLabel>
                <BubbleMenuItem>Alert 1</BubbleMenuItem>
                <BubbleMenuItem>Alert 2</BubbleMenuItem>
                <BubbleMenuItem>Alert 3</BubbleMenuItem>
                <BubbleMenuItem divider>Clear Alerts</BubbleMenuItem>
            </BubbleMenu>
        </div>
    </div>
);
