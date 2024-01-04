const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "none",
    entry: {
        content: path.join(__dirname, 'src', 'content.js'),
        serviceWorker: path.join(__dirname, 'src', 'serviceWorker.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [{from: 'static'}]
        })
    ]
}