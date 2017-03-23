const resolve = require('path');
const join = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    output: {
        path: resolve.resolve(__dirname, 'build')
    },
    devtool: '#eval-source-map',
    devServer: {
        contentBase: join.join(__dirname, 'build'),
        compress: false,
        port: 8080,
        host: '0.0.0.0',
        hot: true,
        inline: true
    }
});
