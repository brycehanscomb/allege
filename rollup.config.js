import babel from 'rollup-plugin-babel';
export default {
    format: 'cjs',
    entry: 'src/index.js',
    dest: 'index.js',
    /**
     * We polyfill `Array.prototype.includes` for the CJS version.
     */
    intro: `require('babel-polyfill-safer');`,
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                'es2015-rollup'
            ],
            plugins: [
                'transform-object-rest-spread'
            ]
        })
    ]
}