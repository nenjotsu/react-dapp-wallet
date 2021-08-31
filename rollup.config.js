import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json';

export default {
    input: [
        pkg.source,
    ],
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        json(),
        image(),
        external(),
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
    ],
    external: [Object.keys(pkg.dependencies || {})],
};
