const path              = require('path')
const config            = require('./webpack.config')
const webpack           = require('webpack')
const WebpackDevServer  = require('webpack-dev-server')

let compiler    = webpack(config)
let server      = new WebpackDevServer(compiler, {
    hot: true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
})

server.listen(8080, 'localhost', () => {
    // Dev server running
})