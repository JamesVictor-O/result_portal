const webpack = require('webpack');
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    stats: {
        errorDetails: true
    },
    resolve: {
        fallback: {
            crypto: require.resolve("crypto-browserify"),
            buffer: require.resolve("buffer/"),
            os: require.resolve("os-browserify/browser"),
            path: require.resolve("path-browserify"),
            stream: require.resolve("stream-browserify")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
            
        }),
    ],
    watch:true
}

