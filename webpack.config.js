const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        libraryTarget: 'var',
        library: 'DNA'
    },
    module: {
        rules: [
            {
                test: /src\/\.(js)$/,
                use: 'babel-loader',
                exclude: /(node_modules)/
            }
        ]
    },
    // plugins: [
    //     webpack.optimize.minimize
    // ]
}