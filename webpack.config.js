const path = require('path')

const config = {
  mode: 'none',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist')
  }
}

module.exports = config