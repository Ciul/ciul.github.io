const path                  = require('path')
const webpack               = require('webpack')
const WebpackChunkHash      = require('webpack-chunk-hash')
const ChunkManifestPlugin   = require('chunk-manifest-webpack-plugin')
const HTMLWebpackPlugin     = require('html-webpack-plugin')
const Config                = require('./package.json')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './index.js'
    },
    devServer: {
        watchOptions: {
            poll: true
        }
    },
    output: {
        path:           path.resolve(__dirname, 'docs'),
        filename:       '[name]-[chunkhash].js',
        chunkFilename:  '[name]-[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:       'vendor',
            minChunks: (module) => {
                return module.resource && (/node_modules/).test(module.resource)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:       'manifest',
            minChunks:  Infinity,
            filename:   'manifest.js'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new WebpackChunkHash(),
        new ChunkManifestPlugin({
            filename:           'manifest.json',
            manifestVariable:   'webpackManifest',
            inlineManifest:     true
        }),
        new HTMLWebpackPlugin({
            title:      Config.name,
            filename:   'index.html',
            template:   'index-template.ejs'
        })
    ]
}
