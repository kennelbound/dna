
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        libraryTarget: 'umd',
        library: 'add'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: require.resolve('./src/gene'),
                use: {loader:'expose-loader', options: 'Gene'}
            },
            {
                test: require.resolve('./src/genome'),
                use: {loader:'expose-loader', options: 'Genome'}
            }
        ]
    },
    // plugins: [
    //     webpack.optimize.minimize
    // ]
}