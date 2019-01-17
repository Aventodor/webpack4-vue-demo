const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const createVueLoaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  // mode: isDev ? 'development' : 'production',
  // externals: {
  //   vue: 'Vue',
  //   jquery: 'jQuery'
  // },
  entry: {
    // app: path.join(__dirname, '../src/app.js'),
    main: path.join(__dirname, '../src/main.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.ejs$/,
        use: ['ejs-loader']
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name]-[hash:5].[ext]',
              limit: 1024
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
      inject: true,
      minify: {
        removeComments: true
      }
    })
    /* new HtmlWebpackPlugin({
      chunks: ['main','vendors.main','manifest.main','commons'],
      // excludeChunks: ['app'],
      filename: 'main.html',
      template: path.join(__dirname, '../index.html'),
      inject: true,
      minify: {
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['app','vendors.app','manifest.app','commons'],
      // excludeChunks: ['main'],
      filename: 'app.html',
      template: path.join(__dirname, '../app.html'),
      inject: true,
      minify: {
        removeComments: true
      }
    }) */
  ]
}

module.exports = config
