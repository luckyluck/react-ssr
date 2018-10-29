const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');

const config = {
    // Inform webpack that we're building a bundle
    // for Node.js, rather than for the browser
    target: 'node',

    // Tell webpack the root file of our server application
    entry: './src/index.js',

    // Tell webpack where to put output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Telling webpack not to include any library into the bundle
    // if this library from /node_modules/ folder
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);