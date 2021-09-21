import jsxToString from 'jsx-to-string';
import { CodeBlock } from 'dist';

export const reactDemo = jsxToString(<CodeBlock>{`console.log("Hello World!");`}</CodeBlock>);
