import jsxToString from 'jsx-to-string';
import { Table } from 'dist';

export const reactDemo = jsxToString(
    <Table
        columns={['Column 1', 'Column 2', 'Column 3']}
        data={[
            {
                'Column 1': 'Cell 1',
                'Column 2': 'Cell 2',
                'Column 3': 'Cell 3',
            },
            {
                'Column 1': 'Cell 4',
                'Column 2': 'Cell 5',
                'Column 3': 'Cell 6',
            },
            {
                'Column 1': 'Cell 7',
                'Column 2': 'Cell 8',
                'Column 3': 'Cell 9',
            },
        ]}
    ></Table>
);
