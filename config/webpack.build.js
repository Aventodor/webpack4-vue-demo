const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const merge = require('webpack-merge')
const common = require('./webpack.config.js')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'initial',
      automaticNameDelimiter: '.',
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          priority: 3
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 1
        }
        /* lib: {
          test: /lodash/,
          name: 'lib',
          priority: 2
        }, */
        /* helper: {
          test: /helper.js/,
          minSize: 1,
          name: 'helper',
          minChunks: 1,
          priority: 3
        } */
      }
    },
    runtimeChunk: {
      name: entrypoint => `manifest.${entrypoint.name}`
    }
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: path.join(__dirname, '../')
      }
    )
  ]
})
