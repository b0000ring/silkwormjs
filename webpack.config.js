const path = require('path');

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
};
