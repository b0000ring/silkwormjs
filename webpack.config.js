const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    library: 'silkwormjs',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'silkworm.js',
  },
  watch: true,
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({})
  ]
};
