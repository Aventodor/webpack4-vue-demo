const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    historyApiFallback: {
      index: '/index.html'
    },
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
