var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'snow.js'
  },
  module: {
    devtool: 'eval',
    debug: true,
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-3']
        }
      }
    ]
  },
  devServer: {
    contentBase: './build',
    port: 8080,
    hot: true,
    inline: true
  }
}
