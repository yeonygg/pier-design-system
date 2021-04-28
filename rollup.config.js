import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: './src/pier-design-system/components/main.js',
    output: [
        {
            file: './dist/index.js',
            format: 'cjs',
        },
    ],
    external: ['react', 'react-dom', 'prop-types'],
    plugins: [
        peerDepsExternal(),
        nodeResolve(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'runtime',
        }),
        commonjs(),
        uglify(),
    ],
};
