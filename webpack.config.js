const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Environment
const production = process.env.NODE_ENV === 'production'

// Entry
const entry = production
    ?   [
            './src/js/client.js'
    ]
    :   [
            './src/js/client.js',
            'webpack/hot/dev-server.js',
            'webpack-dev-server/client?http://localhost:8080'
    ]

// Plugins
let plugins = production
    ?   [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new ExtractTextPlugin({
                filename: 'style-[contenthash:12].css'
            }),
            new HtmlWebpackPlugin({
                title: 'Luis Carlos Osorio Jayk',
                filename: 'index.html',
                template: 'index-template.html'
            })
    ]
    :   [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new ExtractTextPlugin({
                disable: true
            }),
            new webpack.HotModuleReplacementPlugin()
    ]

// Output
let output = production
    ?   {
            path: path.resolve(__dirname, 'docs'),
            filename: 'bundle.[hash].min.js',
            publicPath: '/'
    }
    :   {
            path: path.resolve(__dirname, 'docs'),
            filename: 'bundle.js',
            publicPath: '/docs/'
    }

// Devtool
let devtool = production
    ? 'source-map'
    : 'inline-sourcemap'

// Composed webpack configuration
let config = {
    devtool: devtool,
    entry: entry,
    output: output,
    plugins: plugins,
    module: {
        rules: [
            

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: ['env', 'es2015', 'stage-0', 'react'],
                            plugins: ['transform-class-properties', 'transform-decorators']
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[hash:12].[ext]'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }


        ]
    }
}

// console.log(config)

module.exports = config