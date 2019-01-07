const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  mode: 'none',
  entry: {
    main: path.join(__dirname, '../src/main.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /.ejs$/,
        use: ['ejs-loader']
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.(jpg|jpeg|png|gif|svg)$/,
        use:  [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].[ext]',
              limit: 1024
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: path.join(__dirname, '../')
      }
    ),
    new HtmlWebpackPlugin({
      title: 'webpack demo',
      template: path.join(__dirname, '../index.html'),
      inject: true,
      minify: {
        removeComments: true
      }
    })
  ]
}

module.exports = config