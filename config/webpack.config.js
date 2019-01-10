const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const createVueLoaderOptions = require('./vue-loader.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV === 'development'

const config = {
  // mode: isDev ? 'development' : 'production',
  mode: 'none',
  externals: {
    // vue: 'Vue',
    jquery: 'jQuery'
  },
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
        use:  [
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
  optimization: {
    splitChunks: {
      chunks: 'initial',
      automaticNameDelimiter: '.',
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2,
          priority: 3
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 1
        },
        /*lib: {
          test: /lodash/,
          name: 'lib',
          priority: 2
        },*/
        /*helper: {
          test: /helper.js/,
          minSize: 1,
          name: 'helper',
          minChunks: 1,
          priority: 3
        }*/
      }
    },
    runtimeChunk: {
      name: entrypoint => `manifest.${entrypoint.name}`
    }
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: path.join(__dirname, '../')
      }
    ),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html'),
      inject: true,
      minify: {
        removeComments: true
      }
    })
    /*new HtmlWebpackPlugin({
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
    })*/
  ]
}

module.exports = config